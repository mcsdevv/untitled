// * Libraries
import { NextApiRequest, NextApiResponse } from "next";

// * Helpers
import { otelSetup } from "@lib/api/telemetry";
import { neonWarm, supabaseWarm, planetscaleWarm } from "@lib/api/prisma";
import { logMetric } from "@lib/api";

otelSetup();
const getUser = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const neonStart = Date.now();
    await neonWarm.user.findFirst();
    const neonEnd = Date.now();
    const neonLatency = neonEnd - neonStart;

    const supabaseStart = Date.now();
    await supabaseWarm.user.findFirst();
    const supabaseEnd = Date.now();
    const supabaseLatency = supabaseEnd - supabaseStart;

    await logMetric({
      query: "getFirstUser",
      neonLatency,
    });

    const planetscaleStart = Date.now();
    await planetscaleWarm.user.findFirst();
    const planetscaleEnd = Date.now();
    const planetscaleLatency = planetscaleEnd - planetscaleStart;

    // await logMetric({
    //   query: "getFirstUser",
    //   neonLatency,
    //   supabaseLatency,
    //   planetscaleLatency,
    // });

    // res.status(200).json({ neonLatency, supabaseLatency, planetscaleLatency });
    res.status(200).json({ neonLatency });
  } catch (err) {
    console.log("err", err);
    res.status(500).send(err);
  }
};

export default getUser;
