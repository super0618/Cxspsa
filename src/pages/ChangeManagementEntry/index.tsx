import { useRef } from "react";
import {
  Space,
  Flex,
  Input,
  Select,
  DatePicker,
  List,
  Button,
  Table,
  Tag,
} from "antd";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
  Video,
  Audio,
  PasteCleanup,
} from "@syncfusion/ej2-react-richtexteditor";
import type { TableProps } from "antd";
import styles from "./styles.module.css";

const ChangeManagementEntry = () => {
  const editorRef = useRef<RichTextEditorComponent | null>(null);
  const data = [
    "Change Details",
    "Set Priorities",
    "Risks Impacted",
    "Tasks Impacted",
    "Workaround Details",
    "Reason for Change",
    "Change Details",
    "Change Impact",
    "Dependencies",
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

  const tabledata: DataType[] = [
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
    <Space
      direction="vertical"
      size="large"
      className={styles.main}
      style={{ maxWidth: 1000 }}
    >
      <Flex align="center" gap={8}>
        <p className={styles.heading}>Project:</p>
        <p className={styles.leading}>Project Name [ProjectID]</p>
      </Flex>

      <Flex gap={16}>
        <Flex vertical gap={4}>
          <p className={styles.leading}>Change Request ID</p>
          <Input className={styles.input} />
        </Flex>

        <Flex vertical gap={4}>
          <p className={styles.leading}>Status</p>
          <Select defaultValue={["1"]} className={styles.select}>
            <Select.Option value="1">Option1</Select.Option>
          </Select>
        </Flex>

        <Flex vertical gap={4}>
          <p className={styles.leading}>Status</p>
          <DatePicker />
        </Flex>
      </Flex>

      <Flex gap={16}>
        <List
          size="small"
          header={<div>RFC</div>}
          bordered
          dataSource={data}
          className={styles.card}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        <div className={styles["card-content"]}></div>
      </Flex>

      <Space direction="vertical" size="middle" className={styles.main}>
        <h3 className={styles.heading}>Change Details</h3>
        <Flex vertical gap={4}>
          <p className={styles.leading}>Change Statement</p>
          <Input.TextArea rows={6} />
        </Flex>
        <Flex gap={16}>
          <Flex vertical gap={4}>
            <p className={styles.leading}>Change Type</p>
            <Select defaultValue={["1"]} className={styles.select}>
              <Select.Option value="1">Option1</Select.Option>
            </Select>
          </Flex>

          <Flex vertical gap={4}>
            <p className={styles.leading}>ImpactArea</p>
            <Select defaultValue={["1"]} className={styles.select}>
              <Select.Option value="1">Option1</Select.Option>
            </Select>
          </Flex>

          <Flex vertical gap={4}>
            <p className={styles.leading}>Change Outcome</p>
            <Select defaultValue={["1"]} className={styles.select}>
              <Select.Option value="1">Option1</Select.Option>
            </Select>
          </Flex>
        </Flex>
      </Space>

      <Space direction="vertical" size="middle" className={styles.main}>
        <h3 className={styles.heading}>Set Priorities</h3>
        <Flex gap={16}>
          <Flex vertical gap={4}>
            <p className={styles.leading}>Priority</p>
            <Select defaultValue={["1"]} className={styles.select}>
              <Select.Option value="1">Option1</Select.Option>
            </Select>
          </Flex>

          <Flex vertical gap={4}>
            <p className={styles.leading}>Scope Impact</p>
            <Select defaultValue={["1"]} className={styles.select}>
              <Select.Option value="1">Option1</Select.Option>
            </Select>
          </Flex>

          <Flex vertical gap={4}>
            <p className={styles.leading}>Approval Needed by date</p>
            <Select defaultValue={["1"]} className={styles.select}>
              <Select.Option value="1">Option1</Select.Option>
            </Select>
          </Flex>

          <Flex vertical gap={4}>
            <p className={styles.leading}>Must be implemented by date</p>
            <Select defaultValue={["1"]} className={styles.select}>
              <Select.Option value="1">Option1</Select.Option>
            </Select>
          </Flex>
        </Flex>
      </Space>

      <Space direction="vertical" size="middle" className={styles.main}>
        <h3 className={styles.heading}>Risks Impacted</h3>
        <Flex align="end" gap={16}>
          <Flex vertical gap={4}>
            <p className={styles.leading}>Risk Influence</p>
            <Select defaultValue={["1"]} className={styles.select}>
              <Select.Option value="1">Option1</Select.Option>
            </Select>
          </Flex>

          <Flex vertical gap={4}>
            <p className={styles.leading}>Risk Impact</p>
            <Select defaultValue={["1"]} className={styles.select}>
              <Select.Option value="1">Option1</Select.Option>
            </Select>
          </Flex>

          <Flex vertical gap={4}>
            <p className={styles.leading}>Assumption..</p>
            <Select defaultValue={["1"]} className={styles.select}>
              <Select.Option value="1">Option1</Select.Option>
            </Select>
          </Flex>

          <Button type="primary">Add</Button>
        </Flex>
        <Table columns={columns} dataSource={tabledata} pagination={false} />
      </Space>

      <Space direction="vertical" size="middle" className={styles.main}>
        <h3 className={styles.heading}>Workaround Details</h3>
        <Input.TextArea rows={6} />
        <p className={styles.leading}>
          Justification for not using the work around
        </p>
        <Select defaultValue={["1"]} className={styles.select}>
          <Select.Option value="1">Option1</Select.Option>
        </Select>
      </Space>

      <Space direction="vertical" size="middle" className={styles.main}>
        <h3 className={styles.heading}>Reason for Change</h3>
        <Select defaultValue={["1"]} className={styles.select}>
          <Select.Option value="1">Option1</Select.Option>
        </Select>
        <Input.TextArea rows={6} />
      </Space>

      <Space direction="vertical" size="middle" className={styles.main}>
        <h3 className={styles.heading}>Change Details</h3>
        <Select defaultValue={["1"]} className={styles.select}>
          <Select.Option value="1">Option1</Select.Option>
        </Select>
        <Input.TextArea rows={6} />
      </Space>

      <Space direction="vertical" size="middle" className={styles.main}>
        <h3 className={styles.heading}>Change Details</h3>
        <RichTextEditorComponent ref={editorRef} height="200px">
          <Inject
            services={[
              HtmlEditor,
              Toolbar,
              Image,
              Link,
              QuickToolbar,
              Video,
              Audio,
              PasteCleanup,
            ]}
          />
        </RichTextEditorComponent>
      </Space>

      <Space direction="vertical" size="middle" className={styles.main}>
        <h3 className={styles.heading}>Change Impact</h3>
        <Flex vertical gap={4}>
          <p className={styles.leading}>On Scope & Requirements</p>
          <Input.TextArea rows={6} />
        </Flex>
        <Flex vertical gap={4}>
          <p className={styles.leading}>On Tasks</p>
          <Input.TextArea rows={6} />
        </Flex>
        <Flex vertical gap={4}>
          <p className={styles.leading}>On Risks</p>
          <Input.TextArea rows={6} />
        </Flex>
        <Flex vertical gap={4}>
          <p className={styles.leading}>On Teams & Resources</p>
          <Input.TextArea rows={6} />
        </Flex>
        <Flex vertical gap={4}>
          <p className={styles.leading}>On Schedule & Timelines</p>
          <Input.TextArea rows={6} />
        </Flex>
        <Flex vertical gap={4}>
          <p className={styles.leading}>On Stakeholders</p>
          <Input.TextArea rows={6} />
        </Flex>
      </Space>

      <Space direction="vertical" size="middle" className={styles.main}>
        <p className={styles.leading}>
          Does this Change supercede or impact other change requests below?
        </p>
        <Flex vertical gap={4}>
          <p className={styles.leading}>On Scope & Requirements</p>
          <Input.TextArea rows={6} />
        </Flex>
      </Space>

      <Button type="primary">Save</Button>
    </Space>
  );
};

export default ChangeManagementEntry;
