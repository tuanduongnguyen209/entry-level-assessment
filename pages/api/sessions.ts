import { sessionController } from "@/backend/controllers/SessionController";
import { NextApiRequest, NextApiResponse } from "next";

export default async function dataHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    await sessionController.getSessions(req, res);
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
