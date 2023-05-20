import { useCallback, useEffect, useState } from "react";
import { getSessionList } from "../utils/api";
import { Session, SessionFilter } from "@/frontend/types/session";

const MAX_ITEM = 50;

export function useSessionList(filter?: SessionFilter) {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchSessionList = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getSessionList({
        short_title: filter?.shortTitle,
        status: filter?.sessionStatus,
      });
      setSessions(response.slice(0, MAX_ITEM));
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    fetchSessionList();
  }, [fetchSessionList]);

  return { sessions, loading, error };
}
