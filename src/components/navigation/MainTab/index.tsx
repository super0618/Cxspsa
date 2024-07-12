import { Space } from "antd";
import {
  GanttComponent,
  Inject,
  Selection,
  ColumnDirective,
  ColumnsDirective,
  VirtualScroll,
} from "@syncfusion/ej2-react-gantt";
import { projectNewData } from "../../../data";
import styles from "./styles.module.css";

const MainTab = () => {
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "subtasks",
  };
  const labelSettings = { leftLabel: "TaskName" };
  const projectStartDate = new Date("03/24/2024");
  const projectEndDate = new Date("07/06/2024");

  return (
    <Space direction="vertical" size="large" className={styles.main}>
      <GanttComponent
        id="Default"
        dataSource={projectNewData}
        treeColumnIndex={1}
        taskFields={taskFields}
        labelSettings={labelSettings}
        height="600px"
        projectStartDate={projectStartDate}
        projectEndDate={projectEndDate}
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
        <Inject services={[Selection, VirtualScroll]} />
      </GanttComponent>
    </Space>
  );
};

export { MainTab };
