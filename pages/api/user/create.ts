// * Libraries
import { NextApiRequest, NextApiResponse } from "next";
// * Helpers
import { neonWarm, supabaseWarm, planetscaleWarm } from "@lib/api/prisma";

const createUser = async (_req: NextApiRequest, res: NextApiResponse) => {
  const payload = { data: {} };

  try {
    const neonStart = Date.now();
    await neonWarm.user.create(payload);
    const neonEnd = Date.now();
    const neonTime = neonEnd - neonStart;

    const supabaseStart = Date.now();
    await supabaseWarm.user.create(payload);
    const supabaseEnd = Date.now();
    const supabaseTime = supabaseEnd - supabaseStart;

    const planetscaleStart = Date.now();
    await planetscaleWarm.user.create(payload);
    const planetscaleEnd = Date.now();
    const planetscaleTime = planetscaleEnd - planetscaleStart;

    res.status(200).json({ neonTime, supabaseTime, planetscaleTime });
  } catch (err) {
    console.log("err", err);
    res.status(500).send(err);
  }
};

export default createUser;
