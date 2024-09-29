import { NextResponse } from 'next/server';
import startMongo from '../../../../utilis/startMongo';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name');    
    const surname = searchParams.get('surname');

    if (!name || !surname) {
      return NextResponse.json({ error: 'Name and surname are required' }, { status: 400, headers: { 'Cache-Control': 'no-store, max-age=0' } });
    }

    const client = await startMongo();
    const db = client.db('ieee');

    const existingSubscriber = await db.collection('subscribers').findOne({
      name: name,
      surname: surname,
    });

    client.close();

    if (existingSubscriber) {
      return NextResponse.json({ exists: true }, { status: 200, headers: { 'Cache-Control': 'no-store, max-age=0' } });
    } else {
      return NextResponse.json({ exists: false }, { status: 200, headers: { 'Cache-Control': 'no-store, max-age=0' } });
    }
  } catch (e) { 
    console.error(e);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500, headers: { 'Cache-Control': 'no-store, max-age=0' } });
  }
}

export async function POST(req) {
  try {
    const { email, name, surname } = await req.json();

    // Validate the required fields
    if (!email || !name || !surname) {
      return NextResponse.json({ error: 'Email, name, and surname are required' }, { status: 400, headers: { 'Cache-Control': 'no-store, max-age=0' } });
    }

    const client = await startMongo();
    const db = client.db('ieee');

    // Check if the subscriber already exists
    const existingSubscriber = await db.collection('subscribers').findOne({ email });

    if (existingSubscriber) {
      client.close();
      // Return 409 Conflict when email already exists
      return NextResponse.json({ message: 'Email is already subscribed.' }, { status: 409, headers: { 'Cache-Control': 'no-store, max-age=0' } });
    }

    // Add new subscriber to MongoDB
    await db.collection('subscribers').insertOne({ email, name, surname });
    client.close();

    // Send the subscriber data to Brevo (Sendinblue)
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        listIds: [parseInt(process.env.BREVO_LIST_ID, 10)], // Use your Brevo List ID
        attributes: { FIRSTNAME: name, LASTNAME: surname },
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json();
      console.error('Error from Brevo:', errorData);
      return NextResponse.json({ message: 'Failed to add contact to Brevo.', error: errorData }, { status: 500, headers: { 'Cache-Control': 'no-store, max-age=0' } });
    }

    return NextResponse.json({ message: 'Subscription successful!' }, { status: 200, headers: { 'Cache-Control': 'no-store, max-age=0' } });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Internal Server Error', details: e.message }, { status: 500, headers: { 'Cache-Control': 'no-store, max-age=0' } });
  }
}
