const { NextResponse } = require('next/server');
const startMongo = require('../../../../utilis/startMongo');

export async function GET(req) {
  try {
    const client = await startMongo();
    const db = client.db("ieee");
    const cardnew = await db
      .collection("news")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();
      
    return NextResponse.json(cardnew);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch db" }, { status: 500 });
  }
}
