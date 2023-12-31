// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

type Data = {
  needId: string;
};

type Error = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  if (req.method !== "POST") res.status(405).end();

  try {
    const { category, email, location, title } = JSON.parse(req.body);
    const env = process.env.NODE_ENV === "development" ? "DEV" : "PROD";

    const need = await prisma.need.create({
      data: {
        category: String(category),
        title: String(title),
        env,
      },
    });

    if (!need) throw new Error("Cant create need");

    const needLocation = await prisma.location.create({
      data: {
        env,
        lat: location.lat,
        lng: location.lng,
        radius: location.radius,
        need: { connect: { id: need.id } },
      },
    });

    if (!needLocation) throw new Error("Cant create need location");

    const needUser = await prisma.user.create({
      data: {
        email,
        env,
        need: { connect: { id: need.id } },
      },
    });

    if (!needUser) throw new Error("Cant create need user");

    res.status(200).json({ needId: need.id });
  } catch (err) {
    res.status(500).end({ error: err || "Oops something went wrong" });
  }
}
