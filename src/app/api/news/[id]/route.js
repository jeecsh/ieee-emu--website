// app/api/news/[id]/route.js


import startMongo from'../../../../../utilis/startMongo'; // Update the path as needed
import { ObjectId } from 'mongodb'; // Correctly import ObjectId
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { id } = params; // Extract the ID from the params
  
  try {
    const client = await startMongo();
    const db = client.db("ieee");

    let newsItem;

    // Check if the ID is a valid MongoDB ObjectId
    if (ObjectId.isValid(id) && id.length === 24) {
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
    console.error('Error fetching news item:', e);
    return NextResponse.json({ error: 'Failed to fetch news item' }, { status: 500 });
  }
}
