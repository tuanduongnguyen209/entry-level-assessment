import { SessionResponse } from "@/backend/data/DataRepository";
import { SessionDTO } from "@/backend/dtos/session.dto";

export function mapResponseToDTO(
  responseData: SessionResponse[]
): SessionDTO[] {
  return responseData.map((session: any) => ({
    id: session.id,
    name: session.name,
    status: session.status,
    start_date: session.start_date,
    end_date: session.end_date,
    created_at: session.created_at,
    program: session.program.map((program: any) => ({
      id: program.id,
      display_title: program.display_title,
      thumbnail_img_url: program.thumbnail_img_url,
      short_title: program.short_title,
    })),
  }));
}
