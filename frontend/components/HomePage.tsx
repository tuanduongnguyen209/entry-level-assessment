import SessionFilterForm from "@/frontend/components/SessionFilterForm";
import SessionList from "@/frontend/components/SessionList";
import { useSessionList } from "@/frontend/hooks/useSessionList";
import { SessionFilter } from "@/frontend/types/session";
import { useState } from "react";

const defaultFitler: SessionFilter = {
  shortTitle: "",
  sessionStatus: "",
};

export default function HomePage() {
  const [filter, setFilter] = useState<SessionFilter>(defaultFitler);
  const { sessions, loading, error } = useSessionList(filter);

  function handleOnFilter(newFilter: SessionFilter) {
    setFilter(newFilter);
  }

  return (
    <div>
      <h1>Session List</h1>
      <SessionFilterForm
        defaultFilter={defaultFitler}
        onFilter={handleOnFilter}
      />
      {loading ? "Fetching data ..." : null}
      {error ? "Error fetching data!" : null}
      <SessionList sessions={sessions} />
    </div>
  );
}
