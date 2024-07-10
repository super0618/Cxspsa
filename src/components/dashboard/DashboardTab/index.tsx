import { Flex, Space, Row, Col, Table, Tag, Card } from "antd";
import type { TableProps } from "antd";
import {
  IconExternalLink,
  IconFileExcel,
  IconRefresh,
  IconHelp,
} from "@tabler/icons-react";
import styles from "./styles.module.css";

const DashboardTab = () => {
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
        <p className={styles.heading}>Your Subscription Details</p>
        <div>
          <p className={styles.leading}>
            Plan Subscribed: Project Management Cloud - Monthly
          </p>
          <p className={styles.leading}>Next Renewal Date: mm/dd/yyyy</p>
          <p className={styles.leading}>
            Next Payment Due: mm/dd/yyyy, Amount: $xxx.xx
          </p>
        </div>
      </Space>

      <div>
        <Flex gap={4} align="center">
          <p className={styles.heading}>License Usage</p>
          <IconExternalLink size={18} />
        </Flex>
        <Row gutter={16}>
          <Col xs={24} md={12} lg={6} className={styles["row-gap"]}>
            <Card>
              <p className={styles["card-title"]}>248</p>
              <p className={styles["card-description"]}>
                Total License Inventory
              </p>
            </Card>
          </Col>
          <Col xs={24} md={12} lg={6} className={styles["row-gap"]}>
            <Card>
              <p className={styles["card-title"]}>200</p>
              <p className={styles["card-description"]}>
                Licenses currently assigned
              </p>
            </Card>
          </Col>
          <Col xs={24} md={12} lg={6} className={styles["row-gap"]}>
            <Card>
              <p className={styles["card-title"]}>48</p>
              <p className={styles["card-description"]}>Available Licenses</p>
            </Card>
          </Col>
          <Col xs={24} md={12} lg={6} className={styles["row-gap"]}>
            <Card>
              <p className={styles["card-title"]}>10</p>
              <p className={styles["card-description"]}>Free Trial Users</p>
            </Card>
          </Col>
        </Row>
      </div>

      <Space direction="vertical" size="small" className={styles.main}>
        <Flex gap={4} align="center">
          <p className={styles.heading}>Notifications</p>
          <IconRefresh size={18} />
          <IconFileExcel size={18} />
          <IconExternalLink size={18} />
        </Flex>
        <Table columns={columns} dataSource={data} />
      </Space>

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

export { DashboardTab };
