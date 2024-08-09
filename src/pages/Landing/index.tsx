import React, { useEffect } from "react";
import { Space, Flex, Select, Row, Col, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { Doughnut } from "react-chartjs-2";
import { OverviewCard, LandingCard } from "../../components/landing";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import {
  IconBriefcase,
  IconChecklist,
  IconClock,
  IconUser,
} from "@tabler/icons-react";
import styles from "./styles.module.css";

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
    label: { text: "value", style: { fontWeight: "bold" } },
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

  useEffect(() => {
    const pusher = new Pusher("local", {
      cluster: "mt1",
      wsHost: window.location.hostname,
      wsPort: 6001,
      forceTLS: false,
    });

    const channel = pusher.subscribe("chat");
    channel.bind("App\\Events\\MessageEvent", (data: any) => {
      console.log(data);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  return (
    <Space direction="vertical" size="middle" className={styles.main}>
      <Flex align="end" justify="space-between">
        <h2 className={styles.leading}>Dashboard</h2>
        <Select className={styles.select} defaultValue={["1"]}>
          <Select.Option value="1">Last 30 days</Select.Option>
          <Select.Option value="2">Last 7 days</Select.Option>
          <Select.Option value="3">Last 24 hours</Select.Option>
        </Select>
      </Flex>

      <Row gutter={16}>
        <Col xs={24} sm={12} xl={6} className={styles["row-gap"]}>
          <OverviewCard
            title="Projects"
            n1={850}
            n2={1100}
            rate={-10}
            text="Decrease from Last Month"
            icon={
              <CardIcon color="#57a57b" bgColor="#ecfff5">
                <IconBriefcase size={32} />
              </CardIcon>
            }
          />
        </Col>
        <Col xs={24} sm={12} xl={6} className={styles["row-gap"]}>
          <OverviewCard
            title="Tasks"
            n1={100}
            n2={110}
            rate={-5}
            text="Decrease from Last Month"
            icon={
              <CardIcon color="#c15958" bgColor="#ffeeeb">
                <IconChecklist size={32} />
              </CardIcon>
            }
          />
        </Col>
        <Col xs={24} sm={12} xl={6} className={styles["row-gap"]}>
          <OverviewCard
            title="Resources"
            n1={85}
            n2={90}
            rate={5}
            text="Increase from Last Month"
            icon={
              <CardIcon color="#46489a" bgColor="#e7ecff">
                <IconUser size={32} />
              </CardIcon>
            }
          />
        </Col>
        <Col xs={24} sm={12} xl={6} className={styles["row-gap"]}>
          <OverviewCard
            title="Time Spent"
            n1={752}
            n2={885}
            rate={-3}
            text="Decrease from Last Month"
            icon={
              <CardIcon color="#e59c39" bgColor="#fef4df">
                <IconClock size={32} />
              </CardIcon>
            }
          />
        </Col>
      </Row>

      <Flex justify="space-between" gap={16}>
        <div className={styles["main-content"]}>
          <LandingCard
            header={
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
            <Table columns={columns} dataSource={data} pagination={false} />
          </LandingCard>
        </div>

        <div className={styles["side-content"]}>
          <LandingCard
            header={
              <Flex align="center" justify="space-between">
                <h3 className={styles.heading}>Overall Progress</h3>
                <Flex align="center">
                  <Select defaultValue={["1"]} style={{ width: 120 }}>
                    <Select.Option value="1">See all</Select.Option>
                  </Select>
                </Flex>
              </Flex>
            }
          >
            <Doughnut
              data={{
                labels: ["Red", "Blue", "Yellow"],
                datasets: [
                  {
                    data: [300, 50, 100],
                    backgroundColor: [
                      "rgb(54, 162, 235)",
                      "rgb(255, 205, 86)",
                      "rgb(255, 99, 132)",
                    ],
                    hoverOffset: 12,
                  },
                ],
              }}
              options={{
                cutout: "60%",
                plugins: {
                  legend: { labels: { color: "#666" }, position: "bottom" },
                },
              }}
            />
          </LandingCard>
        </div>
      </Flex>

      <Flex justify="space-between" gap={16}>
        <div className={styles["main-content"]}>
          <LandingCard
            header={
              <Flex align="center" justify="space-between">
                <h3 className={styles.heading}>Milestone Progress</h3>
                <Flex align="center" gap={8}>
                  <Select defaultValue={["1"]} style={{ width: 120 }}>
                    <Select.Option value="1">Project</Select.Option>
                  </Select>
                  <Select defaultValue={["1"]} style={{ width: 160 }}>
                    <Select.Option value="1">Milestones</Select.Option>
                  </Select>
                  <Select defaultValue={["1"]} style={{ width: 120 }}>
                    <Select.Option value="1">Stats</Select.Option>
                  </Select>
                </Flex>
              </Flex>
            }
          >
            <Table columns={columns} dataSource={data} pagination={false} />
          </LandingCard>
        </div>

        <div className={styles["side-content"]}>
          <LandingCard
            header={
              <Flex align="center" justify="space-between">
                <h3 className={styles.heading}>Overall Progress</h3>
                <Flex align="center">
                  <Select defaultValue={["1"]} style={{ width: 120 }}>
                    <Select.Option value="1">See all</Select.Option>
                  </Select>
                </Flex>
              </Flex>
            }
          >
            <Doughnut
              data={{
                labels: ["Red", "Blue", "Yellow"],
                datasets: [
                  {
                    data: [300, 50, 100],
                    backgroundColor: [
                      "rgb(255, 99, 132)",
                      "rgb(54, 162, 235)",
                      "rgb(255, 205, 86)",
                    ],
                    hoverOffset: 12,
                  },
                ],
              }}
              options={{
                cutout: "60%",
                plugins: {
                  legend: { labels: { color: "#666" }, position: "bottom" },
                },
              }}
            />
          </LandingCard>
        </div>
      </Flex>
    </Space>
  );
};

export default Landing;
