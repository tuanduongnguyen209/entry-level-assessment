import { sessionService } from "@/backend/services/SessionService";
import { NextApiRequest, NextApiResponse } from "next";

class SessionController {
  async getSessions(req: NextApiRequest, res: NextApiResponse) {
    try {
      const shortTitle = req.query.short_title as string | undefined;
      const status = req.query.status as string | undefined;

      const filter = {
        shortTitle,
        status,
      };
      const sessions = await sessionService.getSessions(filter);

      res.status(200).json(sessions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch sessions" });
    }
  }
}

export const sessionController = new SessionController();
