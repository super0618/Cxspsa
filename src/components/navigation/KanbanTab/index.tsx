import { Flex, Space } from "antd";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { kanbanData } from "../../../data";
import styles from "./styles.module.css";

const KanbanTab = () => {
  const rowTemplate = (props: any) => {
    var src = `https://ej2.syncfusion.com/react/demos/src/kanban/images/${props.keyField}.png`;

    return (
      <Flex align="center" gap={6}>
        <img src={src} width={24} height={24} alt={props.keyField} />
        <p className={styles.leading}>{props.textField}</p>
      </Flex>
    );
  };

  return (
    <Space direction="vertical" size="large" className={styles.main}>
      <KanbanComponent
        keyField="Status"
        height="600px"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        swimlaneSettings={{
          keyField: "Assignee",
          template: rowTemplate,
        }}
      >
        <ColumnsDirective>
          <ColumnDirective headerText="To Do" keyField="Open" />
          <ColumnDirective headerText="In Progress" keyField="InProgress" />
          <ColumnDirective headerText="Testing" keyField="Testing" />
          <ColumnDirective headerText="Done" keyField="Close" />
        </ColumnsDirective>
      </KanbanComponent>
    </Space>
  );
};

export { KanbanTab };
