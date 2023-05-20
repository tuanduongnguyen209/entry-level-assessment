import SessionItem from "@/frontend/components/SessionItem";
import { Session } from "@/frontend/types/session";
import styles from "../styles/session.module.css";

interface SessionListProps {
  sessions: Session[];
}

const SessionList: React.FC<SessionListProps> = ({ sessions }) => {
  return (
    <div className={styles.sessionList}>
      {sessions.map((session) => (
        <SessionItem key={session.id} session={session} />
      ))}
    </div>
  );
};

export default SessionList;
