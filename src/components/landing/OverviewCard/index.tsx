import { Flex, Card, Space } from "antd";
import { IconArrowUpRight, IconArrowDownRight } from "@tabler/icons-react";
import styles from "./styles.module.css";

interface OverviewCardProps {
  title: string;
  n1: number;
  n2: number;
  rate: number;
  text: string;
  icon: React.ReactNode;
}

const OverviewCard = ({
  title,
  n1,
  n2,
  rate,
  text,
  icon,
}: OverviewCardProps) => {
  const increaseColor = "#57A57B";
  const decreaseColor = "#C25C5B";

  return (
    <Card className={styles.main}>
      <Space direction="vertical" size="small">
        <p className={styles.title}>{title}</p>
        <Flex align="center" gap={2}>
          <p className={styles.heading}>{n1}</p>
          <p className={styles.leading}>/</p>
          <p className={styles.leading}>{n2}</p>
        </Flex>
        <Flex align="end" gap={4}>
          <Flex
            align="center"
            style={{ color: rate > 0 ? increaseColor : decreaseColor }}
          >
            {rate > 0 ? (
              <IconArrowUpRight size={16} />
            ) : (
              <IconArrowDownRight size={16} />
            )}
            <p className={styles.leading}>{Math.abs(rate)}</p>
            <p className={styles.leading}>%</p>
          </Flex>
          <p className={styles.text}>{text}</p>
        </Flex>
      </Space>
      <div className={styles.icon}>{icon}</div>
    </Card>
  );
};

export { OverviewCard };
