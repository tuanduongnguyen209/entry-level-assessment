import { ShortTitle } from "@/frontend/types/program";
import { SessionFilter, SessionStatus } from "@/frontend/types/session";
import React, { useState } from "react";
import styles from "../styles/session.module.css";

interface SessionFilterFormProps {
  defaultFilter: SessionFilter;
  onFilter: (filter: SessionFilter) => void;
}

const SessionFilterForm: React.FC<SessionFilterFormProps> = ({
  defaultFilter,
  onFilter,
}) => {
  const [shortTitle, setShortTitle] = useState(defaultFilter.shortTitle);
  const [sessionStatus, setSessionStatus] = useState<SessionStatus | "">(
    defaultFilter.sessionStatus
  );

  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();

    const filter: SessionFilter = {
      shortTitle,
      sessionStatus,
    };

    onFilter(filter);
  };

  return (
    <form className={styles.sessionFilter} onSubmit={handleFilter}>
      <div>
        <label htmlFor="shortTitle">Short Title:</label>
        <select
          id="shortTitle"
          value={shortTitle}
          onChange={(e) => setShortTitle(e.target.value as ShortTitle | "")}
        >
          <option value="">All</option>
          <option value="vc">vc</option>
          <option value="product">product</option>
          <option value="data">data</option>
          <option value="data2">data2</option>
          <option value="data3">data3</option>
          <option value="scrum">scrum</option>
          <option value="product2">product2</option>
          <option value="growth">growth</option>
        </select>
      </div>

      <div>
        <label htmlFor="sessionStatus">Session Status:</label>
        <select
          id="sessionStatus"
          value={sessionStatus}
          onChange={(e) =>
            setSessionStatus(e.target.value as SessionStatus | "")
          }
        >
          <option value="">All</option>
          <option value="OFFERING">Offering</option>
          <option value="RUNNING">Running</option>
          <option value="OFFBOARDING">Offboarding</option>
        </select>
      </div>

      <button type="submit">Filter</button>
    </form>
  );
};

export default SessionFilterForm;
