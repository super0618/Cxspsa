import { Card } from "antd";
import styles from "./styles.module.css";

interface Props {
  header: React.ReactNode;
  children: React.ReactNode;
}

const LandingCard = ({ header, children }: Props) => {
  return (
    <Card
      title={<div className={styles.header}>{header}</div>}
      className={styles.card}
    >
      {children}
    </Card>
  );
};

export { LandingCard };
