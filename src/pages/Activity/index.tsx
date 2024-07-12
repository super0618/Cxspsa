import { Flex, Space, Timeline } from "antd";
import styles from "./styles.module.css";

const Activity = () => {
  const items = [
    {
      color: "#33A1C9",
      children: "Create a services site 2015-09-01",
    },
    {
      color: "#33A1C9",
      children: "Create a services site 2015-09-01",
    },
    {
      color: "#33A1C9",
      children: (
        <>
          <p className={styles.leading}>Solve initial network problems 1</p>
          <p className={styles.leading}>Solve initial network problems 2</p>
          <p className={styles.leading}>
            Solve initial network problems 3 2015-09-01
          </p>
        </>
      ),
    },
    {
      color: "#33A1C9",
      children: "Create a services site 2015-09-01",
    },
    {
      color: "#33A1C9",
      children: "Create a services site 2015-09-01",
    },
  ];

  return (
    <Space direction="vertical" size="large" className={styles.main}>
      <Space direction="vertical" size="middle" className={styles.main}>
        <Flex align="center" gap={8}>
          <p className={styles.heading}>Project:</p>
          <p className={styles.leading}>Project Name [ Project Id ]</p>
        </Flex>

        <Timeline items={items} />
      </Space>
    </Space>
  );
};

export default Activity;
