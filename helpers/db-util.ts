import { FindOptions, MongoClient, Sort } from "mongodb";

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

  const result = await db.collection(collection).insertOne(document);
  return result;
};

export const getAllDocuments = async (
  client: MongoClient,
  collection: string,
  sort: Sort,
  filter: Object
) => {
  const db = client.db("events");

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
};
