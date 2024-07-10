import { Space, Flex, Select, Row, Col, Card, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { LandingCard } from "../../components/landing";
import styles from "./styles.module.css";
import {
  IconBriefcase,
  IconChecklist,
  IconClock,
  IconUser,
} from "@tabler/icons-react";

interface CardIconProps {
  children: React.ReactNode;
  color?: string;
  bgColor?: string;
}

const CardIcon = ({
  children,
  color = "#333",
  bgColor = "#eee",
}: CardIconProps) => {
  return (
    <div
      className={styles["card-icon"]}
      style={{ color, backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
};

const Landing = () => {
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

  const config = {
    data: [
      { type: "A", value: 27 },
      { type: "B", value: 25 },
      { type: "C", value: 18 },
      { type: "D", value: 15 },
      { type: "E", value: 10 },
      { type: "F", value: 5 },
    ],
    angleField: "value",
    colorField: "type",
    paddingRight: 80,
    innerRadius: 0.6,
    label: {
      text: "value",
      style: {
        fontWeight: "bold",
      },
    },
    legend: {
      color: {
        title: false,
        position: "bottom",
        rowPadding: 5,
      },
    },
    annotations: [
      {
        type: "text",
        style: {
          text: "AntV\nCharts",
          x: "50%",
          y: "50%",
          textAlign: "center",
          fontSize: 40,
          fontStyle: "bold",
        },
      },
    ],
  };

  return (
    <Space direction="vertical" size="middle" className={styles.main}>
      <Flex align="end" justify="space-between">
        <h2 className={styles.leading}>Dashboard</h2>
        <Select defaultValue={["1"]}>
          <Select.Option value="1">Last 30 days</Select.Option>
          <Select.Option value="2">Last 7 days</Select.Option>
          <Select.Option value="3">Last 24 hours</Select.Option>
        </Select>
      </Flex>

      <Row gutter={16}>
        <Col xs={24} sm={12} xl={6} className={styles["row-gap"]}>
          <LandingCard
            title="Projects"
            n1={850}
            n2={1100}
            rate={-10}
            text="Decrease from Last Month"
            icon={
              <CardIcon color="#57a57b" bgColor="#ecfff5">
                <IconBriefcase size={28} />
              </CardIcon>
            }
          />
        </Col>
        <Col xs={24} sm={12} xl={6} className={styles["row-gap"]}>
          <LandingCard
            title="Tasks"
            n1={100}
            n2={110}
            rate={-5}
            text="Decrease from Last Month"
            icon={
              <CardIcon color="#c15958" bgColor="#ffeeeb">
                <IconChecklist size={28} />
              </CardIcon>
            }
          />
        </Col>
        <Col xs={24} sm={12} xl={6} className={styles["row-gap"]}>
          <LandingCard
            title="Resources"
            n1={85}
            n2={90}
            rate={5}
            text="Increase from Last Month"
            icon={
              <CardIcon color="#46489a" bgColor="#e7ecff">
                <IconUser size={28} />
              </CardIcon>
            }
          />
        </Col>
        <Col xs={24} sm={12} xl={6} className={styles["row-gap"]}>
          <LandingCard
            title="Time Spent"
            n1={752}
            n2={885}
            rate={-3}
            text="Decrease from Last Month"
            icon={
              <CardIcon color="#e59c39" bgColor="#fef4df">
                <IconClock size={28} />
              </CardIcon>
            }
          />
        </Col>
      </Row>

      <Flex justify="space-between" gap={16}>
        <div className={styles["main-content"]}>
          <Card
            title={
              <Flex align="center" justify="space-between">
                <h3 className={styles.heading}>Profile Summary</h3>
                <Flex align="center" gap={8}>
                  <Select defaultValue={["1"]} style={{ width: 120 }}>
                    <Select.Option value="1">Project</Select.Option>
                  </Select>
                  <Select defaultValue={["1"]} style={{ width: 160 }}>
                    <Select.Option value="1">Project Manager</Select.Option>
                  </Select>
                  <Select defaultValue={["1"]} style={{ width: 120 }}>
                    <Select.Option value="1">Stats</Select.Option>
                  </Select>
                </Flex>
              </Flex>
            }
          >
            <Table columns={columns} dataSource={data} />
          </Card>
        </div>
        <div className={styles["side-content"]}>
          <Card
            title={
              <Flex align="center" justify="space-between">
                <h3 className={styles.heading}>Overall Progress</h3>
                <Flex align="center">
                  <Select defaultValue={["1"]} style={{ width: 120 }}>
                    <Select.Option value="1">Project</Select.Option>
                  </Select>
                </Flex>
              </Flex>
            }
          >
            Chart Here
          </Card>
        </div>
      </Flex>
    </Space>
  );
};

export default Landing;
