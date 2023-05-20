import { dataRepository } from "@/backend/data/DataRepository";
import { SessionDTO } from "@/backend/dtos/session.dto";
import { mapResponseToDTO } from "@/backend/utils/mappers";

interface GetSessionListFilter {
  shortTitle?: string;
  status?: string;
}

class SessionService {
  async getSessions(filter: GetSessionListFilter): Promise<SessionDTO[]> {
    try {
      const response = await dataRepository.getSessionList();

      const sessions = mapResponseToDTO(response).filter((item: SessionDTO) => {
        if (filter.status && item.status !== filter.status) return false;
        if (filter.shortTitle) {
          if (
            item.program.findIndex(
              (prog) => prog.short_title === filter.shortTitle
            ) === -1
          ) {
            return false;
          }
        }
        return true;
      });

      return sessions;
    } catch (error) {
      throw new Error("Failed to fetch sessions.");
    }
  }
}

export const sessionService = new SessionService();
