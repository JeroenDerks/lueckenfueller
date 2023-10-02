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
  res: NextApiResponse<Need | Error | Message>
) {
  if (req.method !== "POST") res.status(405).end();

  try {
    const env = process.env.NODE_ENV === "development" ? "DEV" : "PROD";
    const { needId } = JSON.parse(req.body);

    console.log(needId);

    const need = await prisma.need.findUnique({
      where: {
        id: needId,
        env,
      },
      include: {
        location: true,
      },
    });
    console.log(need);

    if (need) {
      res.status(200).json(need);
    } else {
      res.status(404).end({ message: "Not found" });
    }
  } catch (err) {
    res.status(500).end({ error: err || "Oops something went wrong" });
  }
}
