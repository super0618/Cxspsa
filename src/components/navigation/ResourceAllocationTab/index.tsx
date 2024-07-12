import { Space } from "antd";
import {
  GanttComponent,
  DayMarkers,
  Inject,
  Selection,
  Toolbar,
  Edit,
  ColumnsDirective,
  ColumnDirective,
  WorkUnit,
} from "@syncfusion/ej2-react-gantt";
import { resourceData, resourceResources } from "../../../data";
import styles from "./styles.module.css";

const ResourceAllocationTab = () => {
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "subtasks",
    work: "work",
    resourceInfo: "resources",
    type: "taskType",
  };
  const taskType = "FixedWork";
  const resourceFields = {
    id: "resourceId",
    name: "resourceName",
    unit: "unit",
  };
  const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true,
  };
  const toolbar = [
    "Add",
    "Edit",
    "Update",
    "Delete",
    "Cancel",
    "ExpandAll",
    "CollapseAll",
  ];
  const splitterSettings = { columnIndex: 5.1 };
  const projectStartDate = new Date("03/28/2024");
  const projectEndDate = new Date("07/28/2024");
  const labelSettings = { rightLabel: "resources" };
  const workUnit: WorkUnit = "Hour";

  return (
    <Space direction="vertical" size="large" className={styles.main}>
      <GanttComponent
        dataSource={resourceData}
        treeColumnIndex={1}
        allowSelection={true}
        highlightWeekends={true}
        toolbar={toolbar}
        editSettings={editSettings}
        projectStartDate={projectStartDate}
        projectEndDate={projectEndDate}
        resourceFields={resourceFields}
        taskFields={taskFields}
        taskType={taskType}
        labelSettings={labelSettings}
        splitterSettings={splitterSettings}
        height="600px"
        resources={resourceResources}
        workUnit={workUnit}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" visible={false}></ColumnDirective>
          <ColumnDirective
            field="TaskName"
            headerText="Task Name"
            width="180"
          ></ColumnDirective>
          <ColumnDirective
            field="resources"
            headerText="Resources"
            width="160"
          ></ColumnDirective>
          <ColumnDirective field="work" width="110"></ColumnDirective>
          <ColumnDirective field="Duration" width="100"></ColumnDirective>
          <ColumnDirective
            field="taskType"
            headerText="Task Type"
            width="110"
          ></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Selection, DayMarkers, Toolbar, Edit]} />
      </GanttComponent>
    </Space>
  );
};

export { ResourceAllocationTab };
