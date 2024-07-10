import { Space, Flex, Table, Tag, Button } from "antd";
import type { TableProps } from "antd";
import {
  IconExternalLink,
  IconFileExcel,
  IconRefresh,
} from "@tabler/icons-react";
import styles from "./styles.module.css";

const PaymentHistoryTab = () => {
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
      <Flex justify="end">
        <Button size="small" type="primary">
          Update Payment Method on File
        </Button>
      </Flex>

      <Space direction="vertical" size="small" className={styles.main}>
        <p className={styles.heading}>Next payment due:</p>
        <Table columns={columns} dataSource={data} pagination={false} />
      </Space>

      <Space direction="vertical" size="small" className={styles.main}>
        <Flex gap={4} align="center">
          <p className={styles.heading}>Payment History</p>
          <IconRefresh size={18} />
          <IconFileExcel size={18} />
          <IconExternalLink size={18} />
        </Flex>
        <Table columns={columns} dataSource={data} pagination={false} />
      </Space>
    </Space>
  );
};

export { PaymentHistoryTab };
