import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://rlawlsyoung:1q2w3e4r@udemycluster.o9wuh6s.mongodb.net/?retryWrites=true&w=majority"
  );

  if (req.method === "GET") {
    const db = client.db("events");

    const documents = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({
      comments: documents.filter((data: any) => data.eventId === eventId),
    });
  } else if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db("events");

    const result = await db.collection("comments").insertOne(newComment);

    console.log(result.insertedId);

    res.status(201).json({
      data: newComment,
    });
  }

  client.close();
};

export default handler;
