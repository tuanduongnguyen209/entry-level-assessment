/* eslint-disable @next/next/no-img-element */
import { Session } from "@/frontend/types/session";
import { formatDate } from "@/frontend/utils/time";
import styles from "../styles/session.module.css";

interface SessionItemProps {
  session: Session;
}

const SessionItem: React.FC<SessionItemProps> = ({ session }) => {
  return (
    <div className={styles.sessionItem}>
      <img
        src={session.program[0].thumbnail_img_url}
        alt={session.program[0].display_title}
        width={50}
      />
      <h3>{session.program[0].display_title}</h3>
      <span>
        {formatDate(session.start_date)} - {formatDate(session.end_date)}
      </span>
    </div>
  );
};

export default SessionItem;
