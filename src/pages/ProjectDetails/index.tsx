import { Space, Flex, Radio, Tree, Table, Tag } from "antd";
import type { TreeDataNode, TableProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";

const ProjectDetails = () => {
  const treeData: TreeDataNode[] = [
    {
      title: "parent 1",
      key: "0-0",
      children: [
        {
          title: "parent 1-0",
          key: "0-0-0",
          children: [
            {
              title: "leaf",
              key: "0-0-0-0",
            },
            {
              title: "leaf",
              key: "0-0-0-1",
            },
            {
              title: "leaf",
              key: "0-0-0-2",
            },
          ],
        },
        {
          title: "parent 1-1",
          key: "0-0-1",
          children: [
            {
              title: "leaf",
              key: "0-0-1-0",
            },
          ],
        },
        {
          title: "parent 1-2",
          key: "0-0-2",
          children: [
            {
              title: "leaf",
              key: "0-0-2-0",
            },
            {
              title: "leaf",
              key: "0-0-2-1",
            },
          ],
        },
      ],
    },
  ];

  const options = [
    { label: "Team", value: 1 },
    { label: "Stakeholders", value: 2 },
    { label: "Requirements", value: 3 },
    { label: "Change Requests", value: 4 },
    { label: "Issues", value: 5 },
    { label: "Risks", value: 6 },
    { label: "Documents", value: 7 },
    { label: "Activity Trail", value: 8 },
  ];

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
    <Space direction="vertical" size="middle" className={styles.main}>
      <Flex align="center" gap={8}>
        <p className={styles.heading}>Project:</p>
        <p className={styles.leading}>CDR - SANTA BARBARA REGION</p>
      </Flex>

      <Radio.Group value={1}>
        <Radio value={1}>Task View</Radio>
        <Radio value={2}>Resource View</Radio>
        <Radio value={3}>Requiments View</Radio>
        <Radio value={4}>Change Requests View</Radio>
        <Radio value={5}>Stakeholders View</Radio>
        <Radio value={6}>Risks View</Radio>
      </Radio.Group>

      <Flex gap={16}>
        <Tree
          showLine
          switcherIcon={<DownOutlined />}
          defaultExpandedKeys={["0-0-0"]}
          treeData={treeData}
          className={styles.treeview}
        />

        <Space direction="vertical" size="middle" className={styles.content}>
          <Radio.Group
            options={options}
            value={1}
            optionType="button"
            buttonStyle="solid"
          />

          <p className={styles.heading}>
            Team Members assigned to the task: MOS ID 393931.1 Steps
          </p>

          <Table columns={columns} dataSource={data} pagination={false} />
        </Space>
      </Flex>
    </Space>
  );
};

export default ProjectDetails;
