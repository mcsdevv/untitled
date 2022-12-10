// * Libraries
import { NextApiRequest, NextApiResponse } from "next";
// import ms from "ms";

// * Helpers
import { application } from "@lib/api/prisma";

const getUser = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    let metrics = await application.metricsWarm.findMany({
      select: {
        timestamp: true,
        neonLatency: true,
        planetscaleLatency: true,
        supabaseLatency: true,
      },
      where: {
        query: "getFirstUser",
        // timestamp: {
        //   gte: new Date(Date.now() - ms("15m")),
        // },
      },
      orderBy: {
        timestamp: "desc",
      },
      take: 15,
    });

    const metricsFormatted = metrics.reverse().map((m: any) => {
      let hours = m.timestamp.getHours();
      let minutes = m.timestamp.getMinutes();

      if (hours.toString().length === 1) {
        hours = `0${hours}`;
      }

      if (minutes.toString().length === 1) {
        minutes = `0${minutes}`;
      }
      return {
        timestampRaw: m.timestamp,
        timestamp: `${hours}:${minutes}`,
        Neon: m.neonLatency,
        Supabase: m.supabaseLatency,
        Planetscale: m.planetscaleLatency,
      };
    });

    res.status(200).json(metricsFormatted);
  } catch (err) {
    console.log("err", err);
    res.status(500).send(err);
  }
};

export default getUser;
