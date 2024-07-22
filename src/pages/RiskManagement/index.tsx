import { useRef } from "react";
import { Flex, Space, Input, Select, Button } from "antd";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
  Table,
  Video,
  Audio,
  PasteCleanup,
} from "@syncfusion/ej2-react-richtexteditor";
import styles from "./styles.module.css";

const RiskManagement = () => {
  const editor1Ref = useRef<RichTextEditorComponent | null>(null);
  const editor2Ref = useRef<RichTextEditorComponent | null>(null);

  return (
    <Space direction="vertical" size="large" className={styles.main}>
      <Flex align="center" gap={8}>
        <p className={styles.heading}>Project:</p>
        <p className={styles.leading}>Project Name [Project ID]</p>
      </Flex>

      <Flex gap={16}>
        <Flex vertical gap={4}>
          <p className={styles.leading}>Risk ID:</p>
          <Input className={styles.input} />
        </Flex>

        <Flex vertical gap={4}>
          <p className={styles.leading}>Recorded Date:</p>
          <Input className={styles.input} />
        </Flex>
      </Flex>

      <Flex gap={16}>
        <Flex vertical gap={4}>
          <p className={styles.leading}>Risk Type:</p>
          <Select defaultValue={["1"]} className={styles.select}>
            <Select.Option value="1">Option1</Select.Option>
          </Select>
        </Flex>

        <Flex vertical gap={4}>
          <p className={styles.leading}>Risk Triggers:</p>
          <Select defaultValue={["1"]} className={styles.select}>
            <Select.Option value="1">Option1</Select.Option>
          </Select>
        </Flex>

        <Flex vertical gap={4}>
          <p className={styles.leading}>Severity:</p>
          <Select defaultValue={["1"]} className={styles.select}>
            <Select.Option value="1">Option1</Select.Option>
          </Select>
        </Flex>

        <Flex vertical gap={4}>
          <p className={styles.leading}>Probability:</p>
          <Select defaultValue={["1"]} className={styles.select}>
            <Select.Option value="1">Option1</Select.Option>
          </Select>
        </Flex>

        <Flex vertical gap={4}>
          <p className={styles.leading}>Impact Multi Select:</p>
          <Select defaultValue={["1"]} className={styles.select}>
            <Select.Option value="1">Option1</Select.Option>
          </Select>
        </Flex>

        <Flex vertical gap={4}>
          <p className={styles.leading}>Risk Owners:</p>
          <Select defaultValue={["1"]} className={styles.select}>
            <Select.Option value="1">Option1</Select.Option>
          </Select>
        </Flex>
      </Flex>

      <Space direction="vertical" size="middle" className={styles.main}>
        <p className={styles.heading}>
          Provide Justification for Open Response Strategy
        </p>
        <RichTextEditorComponent ref={editor1Ref} height="200px">
          <Inject
            services={[
              HtmlEditor,
              Toolbar,
              Image,
              Link,
              QuickToolbar,
              Table,
              Video,
              Audio,
              PasteCleanup,
            ]}
          />
        </RichTextEditorComponent>
      </Space>

      <Space direction="vertical" size="middle" className={styles.main}>
        <h3 className={styles.heading}>Response</h3>
        <Flex vertical gap={4}>
          <p className={styles.leading}>Risk Owners:</p>
          <Select defaultValue={["1"]} className={styles.select}>
            <Select.Option value="1">Option1</Select.Option>
          </Select>
        </Flex>
        <p className={styles.heading}>
          Provide Justification for Open Response Strategy
        </p>
        <RichTextEditorComponent ref={editor2Ref} height="200px">
          <Inject
            services={[
              HtmlEditor,
              Toolbar,
              Image,
              Link,
              QuickToolbar,
              Table,
              Video,
              Audio,
              PasteCleanup,
            ]}
          />
        </RichTextEditorComponent>
      </Space>

      <Button type="primary">Save</Button>
    </Space>
  );
};

export default RiskManagement;
