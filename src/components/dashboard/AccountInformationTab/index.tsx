import { Flex, Space, Row, Col, Table, Button, Input, Tag, Upload } from "antd";
import type { TableProps } from "antd";
import { IconPlus, IconHelp } from "@tabler/icons-react";
import styles from "./styles.module.css";

const AccountInformationTab = () => {
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
      <p className={styles.heading}>Company ID: 1234565646464</p>

      <Flex gap={24}>
        <div className={styles["company-logo"]}>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          >
            <button style={{ border: 0, background: "none" }} type="button">
              <IconPlus />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
          <p className={styles.leading}>Corporate Logo</p>
        </div>

        <Row gutter={16} style={{ maxWidth: 800 }}>
          <Col span={12} className={styles["row-gap"]}>
            <p className={styles.leading}>Company Name:</p>
            <Input />
          </Col>
          <Col span={6} className={styles["row-gap"]}>
            <p className={styles.leading}>Primary Currency:</p>
            <Input />
          </Col>
          <Col span={6} className={styles["row-gap"]}>
            <p className={styles.leading}>Country:</p>
            <Input />
          </Col>
          <Col span={12} className={styles["row-gap"]}>
            <p className={styles.leading}>Address:</p>
            <Input />
          </Col>
          <Col span={12} className={styles["row-gap"]}>
            <p className={styles.leading}>Address Line2:</p>
            <Input />
          </Col>
          <Col span={6} className={styles["row-gap"]}>
            <p className={styles.leading}>City:</p>
            <Input />
          </Col>
          <Col span={6} className={styles["row-gap"]}>
            <p className={styles.leading}>County:</p>
            <Input />
          </Col>
          <Col span={6} className={styles["row-gap"]}>
            <p className={styles.leading}>Zip:</p>
            <Input />
          </Col>
          <Col span={6} className={styles["row-gap"]}>
            <p className={styles.leading}>State:</p>
            <Input />
          </Col>
        </Row>
      </Flex>

      <Space direction="vertical" size="small" className={styles.main}>
        <Flex align="center" justify="space-between">
          <Flex gap={4} align="center">
            <p className={styles.heading}>Site Administrator</p>
            <IconHelp size={18} />
          </Flex>
          <Button size="small" type="primary">
            Add an Administrator
          </Button>
        </Flex>
        <Table columns={columns} dataSource={data} />
      </Space>

      <Space direction="vertical" size="small" className={styles.main}>
        <p className={styles.heading}>Account Management</p>
        <Button>Close Account & Cancel all Subscriptions</Button>
      </Space>
    </Space>
  );
};

export default AccountInformationTab;
