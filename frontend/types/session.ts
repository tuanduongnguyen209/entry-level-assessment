import { Program, ShortTitle } from "./program";

export type SessionStatus = "OFFERING" | "RUNNING" | "OFFBOARDING";

export interface Session {
  id: string;
  name: string;
  status: SessionStatus;
  start_date: string;
  end_date: string;
  created_at: string;
  program: Program[];
}

export interface SessionFilter {
  shortTitle: ShortTitle | "";
  sessionStatus: SessionStatus | "";
}
