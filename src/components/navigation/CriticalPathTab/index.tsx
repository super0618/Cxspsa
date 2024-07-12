import { Space } from "antd";
import {
  GanttComponent,
  Inject,
  Selection,
  ColumnsDirective,
  ColumnDirective,
  Toolbar,
  CriticalPath,
  Edit,
} from "@syncfusion/ej2-react-gantt";
import { projectNewData } from "../../../data";
import styles from "./styles.module.css";

const CriticalPathTab = () => {
  const taskFields: any = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "subtasks",
  };
  const editSettings: any = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true,
  };
  const toolbar: any = ["Add", "Edit", "Delete", "CriticalPath"];
  const labelSettings: any = {
    leftLabel: "TaskName",
  };
  const projectStartDate: Date = new Date("03/24/2024");
  const projectEndDate: Date = new Date("07/06/2024");

  return (
    <Space direction="vertical" size="large" className={styles.main}>
      <GanttComponent
        id="Critical"
        dataSource={projectNewData}
        treeColumnIndex={1}
        taskFields={taskFields}
        labelSettings={labelSettings}
        height="600px"
        projectStartDate={projectStartDate}
        projectEndDate={projectEndDate}
        enableCriticalPath={true}
        editSettings={editSettings}
        toolbar={toolbar}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" width="80"></ColumnDirective>
          <ColumnDirective
            field="TaskName"
            headerText="Job Name"
            width="250"
            clipMode="EllipsisWithTooltip"
          ></ColumnDirective>
          <ColumnDirective field="StartDate"></ColumnDirective>
          <ColumnDirective field="Duration"></ColumnDirective>
          <ColumnDirective field="Progress"></ColumnDirective>
          <ColumnDirective field="Predecessor"></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Selection, Toolbar, CriticalPath, Edit]} />
      </GanttComponent>
    </Space>
  );
};

export { CriticalPathTab };
