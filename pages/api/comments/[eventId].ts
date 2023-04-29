import { NextApiRequest, NextApiResponse } from "next";

import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "@/helpers/db-util";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const eventId = req.query.eventId;

  let client;

  try {
    client = await connectDatabase();
  } catch (err) {
    res.status(500).json({ message: "Connecting to the database failed." });
    return;
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(
        client,
        "comments",
        { _id: -1 },
        { eventId: eventId }
      );
      res.status(200).json({
        comments: documents,
      });
    } catch (err) {
      res.status(500).json({ message: "Getting comment failed." });
    }
  } else if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      client.close();
    }

    interface NewCommentType {
      _id?: Object;
      email: string;
      name: string;
      text: string;
      eventId: string | string[] | undefined;
    }

    const newComment: NewCommentType = {
      email,
      name,
      text,
      eventId,
    };

    let result;

    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;
      res.status(201).json({
        data: newComment,
      });
    } catch (err) {
      res.status(500).json({ message: "Inserting comment failed." });
    }
  }

  client.close();
};

export default handler;
