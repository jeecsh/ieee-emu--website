import startMongo from '../../../../../utilis/startMongo'; // Ensure this path is correct
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const client = await startMongo();
    const db = client.db("ieee");
    
    let newsItem;

    if (ObjectId.isValid(id) && id.length === 24) {
      // Handle MongoDB ObjectId
      newsItem = await db.collection("news").findOne({ _id: new ObjectId(id) });
    } else {
      // Handle custom numeric IDs
      newsItem = await db.collection("news").findOne({ id: parseInt(id, 10) });
    }

    if (!newsItem) {
      return NextResponse.json({ error: 'News item not found' }, { status: 404 });
    }

    return NextResponse.json(newsItem);
  } catch (e) {
    console.error('Error fetching news item:', e.message); // Log the error message
    return NextResponse.json({ error: 'Failed to fetch news item' }, { status: 500 });
  }
}
