// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { LatLng } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LatLng | { error: string }>
) {
  if (req.method !== "GET") res.status(405).end();

  try {
    const request = await fetch(
      "https://api.geoapify.com/v1/ipinfo?&apiKey=e97e7eae25ba45b4a0e98eeb1cf7d720",
      { method: "GET" }
    );

    if (!request.ok) throw new Error("IP fetch failed");

    const data = await request.json();
    if (!data?.location) throw new Error("Location data missing");

    const { latitude, longitude } = data.location;

    res.status(200).json({ lat: latitude, lng: longitude });
  } catch (err) {
    res.status(500).end({ error: err || "Oops something went wrong" });
  }
}
