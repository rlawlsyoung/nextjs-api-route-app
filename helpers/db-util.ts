import { MongoClient } from "mongodb";

export const connectDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://rlawlsyoung:1q2w3e4r@udemycluster.o9wuh6s.mongodb.net/?retryWrites=true&w=majority"
  );

  return client;
};

export const insertDocument = async (
  client: MongoClient,
  collection: string,
  document: { email: string }
) => {
  const db = client.db("events");

  await db.collection(collection).insertOne(document);
};
