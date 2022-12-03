// * Libraries
import { NextApiRequest, NextApiResponse } from "next";
import ms from "ms";

// * Helpers
import { application } from "@lib/api/prisma";

const getUser = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const metrics = await application.metrics.findMany({
      where: {
        query: "getFirstUser",
        timestamp: {
          gte: new Date(Date.now() - ms("15m")),
        },
      },
      orderBy: {
        timestamp: "desc",
      },
    });

    res.status(200).json({ metrics });
  } catch (err) {
    console.log("err", err);
    res.status(500).send(err);
  }
};

export default getUser;
