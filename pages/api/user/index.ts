// * Libraries
import { NextApiRequest, NextApiResponse } from "next";
// * Helpers
import { neon, supabase, planetscale } from "@lib/api/prisma";

const getUser = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const neonStart = Date.now();
    await neon.user.findFirst();
    const neonEnd = Date.now();
    const neonTime = neonEnd - neonStart;

    const supabaseStart = Date.now();
    await supabase.user.findFirst();
    const supabaseEnd = Date.now();
    const supabaseTime = supabaseEnd - supabaseStart;

    const planetscaleStart = Date.now();
    await planetscale.user.findFirst();
    const planetscaleEnd = Date.now();
    const planetscaleTime = planetscaleEnd - planetscaleStart;

    res.status(200).json({ neonTime, supabaseTime, planetscaleTime });
  } catch (err) {
    console.log("err", err);
    res.status(500).send(err);
  }
};

export default getUser;
