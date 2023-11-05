// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { Need } from "@/types";

type Error = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Need | Error>
) {
  if (req.method !== "POST") res.status(405).end();

  try {
    const { needId, email } = JSON.parse(req.body);
    const env = process.env.NODE_ENV === "development" ? "DEV" : "PROD";

    await prisma.like.create({
      data: {
        env,
        need: { connect: { id: needId } },
        email,
      },
    });

    const need = await prisma.need.findUnique({
      where: {
        id: needId,
        env,
      },
      include: {
        likes: true,
        location: true,
      },
    });

    console.log(need);
    if (need && need?.location !== null && need.likes !== null) {
      res.status(200).json(need);
    }
  } catch (err) {
    res.status(500).end({ error: err || "Oops something went wrong" });
  }
}
