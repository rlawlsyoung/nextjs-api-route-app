import { NextApiRequest, NextApiResponse } from "next";

import { connectDatabase, insertDocument } from "@/helpers/db-util";

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
      await insertDocument(client, "newsletter", { email: email });
      client.close();
    } catch (err) {
      res.status(500).json({ message: "Inserting database failed." });
      return;
    }

    res.status(201).json({ email: email });
  }
};

export default handler;
