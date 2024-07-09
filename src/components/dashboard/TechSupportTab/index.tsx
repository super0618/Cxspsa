import { Space, Collapse, Flex, Table, Tag } from "antd";
import type { TableProps } from "antd";
import {
  IconExternalLink,
  IconFileExcel,
  IconRefresh,
  IconHelp,
  IconHeadphonesFilled,
} from "@tabler/icons-react";
import styles from "./styles.module.css";

const TechSupportTab = () => {
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
      <p className={styles.heading}>
        Use any of many ways to contact Coexsys Tech Support!
      </p>

      <Collapse defaultActiveKey={["1"]}>
        <Collapse.Panel header="Chat with Us!" key="1">
          <Flex justify="center">
            <IconHeadphonesFilled size={64} />
          </Flex>
        </Collapse.Panel>
        <Collapse.Panel header="Have us call you" key="2">
          <Flex justify="center">
            <IconHeadphonesFilled size={64} />
          </Flex>
        </Collapse.Panel>
        <Collapse.Panel header="Send an offline message!" key="3">
          <Flex justify="center">
            <IconHeadphonesFilled size={64} />
          </Flex>
        </Collapse.Panel>
      </Collapse>

      <Space direction="vertical" size="small" className={styles.main}>
        <Flex gap={4} align="center">
          <p className={styles.heading}>Users currently logged in</p>
          <IconRefresh size={18} />
          <IconFileExcel size={18} />
          <IconExternalLink size={18} />
          <IconHelp size={18} />
        </Flex>
        <Table columns={columns} dataSource={data} />
      </Space>
    </Space>
  );
};

export default TechSupportTab;
