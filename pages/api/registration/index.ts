import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const connectDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://rlawlsyoung:1q2w3e4r@udemycluster.o9wuh6s.mongodb.net/?retryWrites=true&w=majority"
  );

  return client;
};

const insertDocument = async (
  client: MongoClient,
  document: { email: string }
) => {
  const db = client.db("events");

  await db.collection("newsletter").insertOne(document);
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (err) {
      res.status(500).json({ message: "Connecting to the database failed." });
      return;
    }

    try {
      await insertDocument(client, { email: email });
      client.close();
    } catch (err) {
      res.status(500).json({ message: "Inserting database failed." });
      return;
    }

    res.status(201).json({ email: email });
  }
};

export default handler;
