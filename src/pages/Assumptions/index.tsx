import { Tabs, Flex, Space } from "antd";
import type { TabsProps } from "antd";
import {
  RecordAssumptionsTab,
  ExistingAssumptionsTab,
} from "../../components/assumptions";
import styles from "./styles.module.css";

const Assumptions = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Record Assumptions",
      children: <RecordAssumptionsTab />,
    },
    {
      key: "2",
      label: "Existing Assumptions",
      children: <ExistingAssumptionsTab />,
    },
  ];

  return (
    <Space direction="vertical" size="middle" className={styles.main}>
      <Flex align="center" gap={8}>
        <h3 className={styles.heading}>Project:</h3>
        <h3 className={styles.leading}>Project Name[ProjectID]</h3>
      </Flex>

      <Tabs defaultActiveKey="1" items={items} tabPosition="top" />
    </Space>
  );
};

export default Assumptions;
