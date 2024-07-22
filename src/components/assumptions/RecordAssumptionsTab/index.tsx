// @ts-nocheck
import { useEffect, useRef } from "react";
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from "@syncfusion/ej2-react-documenteditor";
import { Flex, Space, Dropdown, Input } from "antd";
import type { MenuProps } from "antd";
import { IconEye } from "@tabler/icons-react";
import styles from "./styles.module.css";

DocumentEditorContainerComponent.Inject(Toolbar);

const RecordAssumptionsTab = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a href="#">Menu1</a>,
    },
    {
      key: "2",
      label: <a href="#">Menu2</a>,
    },
    {
      key: "3",
      label: <a href="#">Menu3</a>,
    },
    {
      key: "4",
      label: <a href="#">Menu4</a>,
    },
  ];

  useEffect(() => {
    rendereComplete();
  }, []);

  let container = useRef(null);
  const onLoadDefault = () => {
    container.current.documentEditor.documentName = "Getting Started";
    container.current.documentChange = () => {
      container.current.documentEditor.focusIn();
    };
  };
  const rendereComplete = () => {
    window.onbeforeunload = function () {
      return "Want to save your changes?";
    };
    container.current.documentEditor.pageOutline = "#E0E0E0";
    container.current.documentEditor.acceptTab = true;
    container.current.documentEditor.resize();
    onLoadDefault();
  };

  return (
    <Space direction="vertical" size="large" className={styles.main}>
      <Flex align="center" justify="space-between">
        <Flex align="center" gap={32}>
          <Flex align="center" gap={8}>
            <p className={styles.heading}>Assumption ID:</p>
            <p className={styles.leading}>ASM001</p>
          </Flex>

          <Flex align="center" gap={8}>
            <p className={styles.heading}>Title</p>
            <p className={styles.leading}>
              <Input />
            </p>
          </Flex>
        </Flex>

        <Dropdown menu={{ items }} trigger={["click"]}>
          <IconEye color="#666" size={20} />
        </Dropdown>
      </Flex>

      <DocumentEditorContainerComponent
        ref={container}
        style={{ display: "block" }}
        height={"700px"}
        serviceUrl="https://services.syncfusion.com/react/production/api/documenteditor/"
        enableToolbar={true}
        locale="en-US"
      />
    </Space>
  );
};

export { RecordAssumptionsTab };
