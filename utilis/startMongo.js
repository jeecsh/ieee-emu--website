const { MongoClient } = require('mongodb');

let client;
let clientPromise;

const startMongo = async () => {
  if (!clientPromise) {
    client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    clientPromise = client.connect();
  }
  return clientPromise;
};

module.exports = startMongo;
