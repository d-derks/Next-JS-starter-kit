import React from "react";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "This is not a valid email address" });
      return;
    }
    console.log(userEmail, "[USER EMAIL]");
    res.status(201).json({ message: "Signed up" });
  }
};

export default handler;
