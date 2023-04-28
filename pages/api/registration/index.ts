import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://rlawlsyoung:1q2w3e4r@udemycluster.o9wuh6s.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db("newsletter");

    await db.collection("emails").insertOne({ email: email });

    client.close();

    res.status(201).json({ email: email });
  }
};

export default handler;
