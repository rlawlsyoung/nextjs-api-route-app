import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.status(200).json({
      data: [
        { email: "1@test.com", name: "kim", text: "hi" },
        { email: "2@test.com", name: "park", text: "bye" },
      ],
    });
  } else if (req.method === "POST") {
    res.status(201).json({
      data: { email: req.body.email, name: req.body.name, text: req.body.text },
    });
  }
};

export default handler;
