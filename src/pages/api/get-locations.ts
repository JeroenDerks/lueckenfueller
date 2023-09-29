// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { Location } from "@/types";

type Error = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Location[] | Error>
) {
  if (req.method !== "GET") res.status(405).end();

  try {
    const env = process.env.NODE_ENV === "development" ? "DEV" : "PROD";

    const locations = await prisma.location.findMany({
      where: {
        env,
      },
    });

    res.status(200).json(locations);
  } catch (err) {
    res.status(500).end({ error: err || "Oops something went wrong" });
  }
}
