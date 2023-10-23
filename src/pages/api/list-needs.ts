// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { Need } from "@/types";

type Error = {
  error: string;
};

type Message = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Need[] | Error | Message>
) {
  if (req.method !== "POST") res.status(405).end();

  try {
    const env = process.env.NODE_ENV === "development" ? "DEV" : "PROD";
    const { category } = JSON.parse(req.body);

    const needs = await prisma.need.findMany({
      where: { category, env },
      include: {
        location: true,
        likes: true,
      },
    });

    if (needs) {
      res.status(200).json(needs);
    } else {
      res.status(404).end({ message: "Not found" });
    }
  } catch (err) {
    res.status(500).end({ error: err || "Oops something went wrong" });
  }
}
