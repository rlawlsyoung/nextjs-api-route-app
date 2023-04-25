import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const eventId = req.query.eventId;

  if (req.method === "GET") {
    res.status(200).json({
      data: [
        { id: "c1", email: "1@test.com", name: "kim", text: "hi" },
        { id: "c2", email: "2@test.com", name: "park", text: "bye" },
      ],
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
    res.status(201).json({
      data: { email: email, name: name, text: text },
    });
  }
};

export default handler;
