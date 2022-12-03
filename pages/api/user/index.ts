// * Libraries
import { NextApiRequest, NextApiResponse } from "next";

// * Helpers
import { neon, supabase, planetscale } from "@lib/api/prisma";
import { recordMetric } from "@lib/api/recordMetric";

const getUser = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const neonStart = Date.now();
    await neon.user.findFirst();
    const neonEnd = Date.now();
    const neonLatency = neonEnd - neonStart;

    const supabaseStart = Date.now();
    await supabase.user.findFirst();
    const supabaseEnd = Date.now();
    const supabaseLatency = supabaseEnd - supabaseStart;

    const planetscaleStart = Date.now();
    await planetscale.user.findFirst();
    const planetscaleEnd = Date.now();
    const planetscaleLatency = planetscaleEnd - planetscaleStart;

    await recordMetric({
      query: "getFirstUser",
      neonLatency,
      supabaseLatency,
      planetscaleLatency,
    });

    res.status(200).json({ neonLatency, supabaseLatency, planetscaleLatency });
  } catch (err) {
    console.log("err", err);
    res.status(500).send(err);
  }
};

export default getUser;
