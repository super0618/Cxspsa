import { Flex, Space, Input, Button, Select } from "antd";
import styles from "./styles.module.css";

const NewProject = () => {
  return (
    <Space direction="vertical" size="large" className={styles.main}>
      <Space direction="vertical" size="small" className={styles.main}>
        <Flex align="center" gap={8}>
          <p className={styles.heading}>Project:</p>
          <p className={styles.leading}>Project Name [Project ID]</p>
        </Flex>
        <Flex align="center" gap={8}>
          <Input className={styles.input} />
          <Button type="primary">Create</Button>
        </Flex>
      </Space>

      <Flex align="center" gap={16}>
        <Flex vertical gap={4}>
          <p className={styles.leading}>Project Owner</p>
          <Select className={styles.select} defaultValue={["1"]}>
            <Select.Option value="1">Owner1</Select.Option>
          </Select>
        </Flex>

        <Flex vertical gap={4}>
          <p className={styles.leading}>Default TimeZone</p>
          <Select className={styles.select} defaultValue={["1"]}>
            <Select.Option value="1">Owner1</Select.Option>
          </Select>
        </Flex>

        <Flex vertical gap={4}>
          <p className={styles.leading}>Time Entry Submission Period</p>
          <Select className={styles.select} defaultValue={["1"]}>
            <Select.Option value="1">Owner1</Select.Option>
          </Select>
        </Flex>
      </Flex>
    </Space>
  );
};

export default NewProject;
