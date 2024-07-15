import { Button, DatePicker, Flex, Select, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import styles from "./styles.module.css";

const TimeTracking = () => {
  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            return <Tag key={tag}>{tag.toUpperCase()}</Tag>;
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  return (
    <Space direction="vertical" size="large" className={styles.main}>
      <Space direction="vertical" size="small" className={styles.main}>
        <Flex align="center" gap={8}>
          <p className={styles.heading}>Project:</p>
          <p className={styles.leading}>Project Name [Project ID]</p>
        </Flex>
        <Flex align="center" gap={8}>
          <p className={styles.heading}>Time Sheet Period:</p>
          <p className={styles.leading}>7/1/2024 - 7/6/2024 (weekly)</p>
        </Flex>
      </Space>

      <Space direction="vertical" size="small" className={styles.main}>
        <p className={styles.leading}>Range</p>
        <Flex align="center" gap={8}>
          <Select className={styles.select} defaultValue={["1"]}>
            <Select.Option value="1">Current Period</Select.Option>
          </Select>
          <DatePicker placeholder="3/16/2022" />
          <DatePicker placeholder="3/31/2022" />
          <Button type="primary">PDF</Button>
        </Flex>
      </Space>

      <Space direction="vertical" size="small" className={styles.main}>
        <Table columns={columns} dataSource={data} pagination={false} />
        <Button type="primary">Submit</Button>
      </Space>
    </Space>
  );
};

export default TimeTracking;
