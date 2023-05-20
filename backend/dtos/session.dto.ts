import { ProgramDTO } from "@/backend/dtos/program.dto";

export interface SessionDTO {
  id: string;
  name: string;
  status: string;
  start_date: string;
  end_date: string;
  created_at: string;
  program: ProgramDTO[];
}
