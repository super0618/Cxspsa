import { useRef } from "react";
import { Space } from "antd";
import {
  GanttComponent,
  DayMarkers,
  Inject,
  Selection,
  Toolbar,
  Edit,
  Resize,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-gantt";
import { resourcesData, resourceCollection } from "../../../data";
import styles from "./styles.module.css";

const ResourceViewTab = () => {
  let ganttInstance = useRef<GanttComponent>(null);
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    resourceInfo: "resources",
    work: "work",
    child: "subtasks",
  };
  const taskType = "FixedWork";
  const resourceFields = {
    id: "resourceId",
    name: "resourceName",
    unit: "resourceUnit",
    group: "resourceGroup",
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
    {
      text: "Show/Hide Overallocation",
      tooltipText: "Show/Hide Overallocation",
      id: "showhidebar",
    },
  ];
  const splitterSettings = { columnIndex: 3 };
  const projectStartDate = new Date("03/28/2024");
  const projectEndDate = new Date("05/18/2024");
  const labelSettings = { rightLabel: "resources", taskLabel: "Progress" };
  const toolbarClick = (args: any) => {
    if (ganttInstance?.current && args?.item?.id === "showhidebar") {
      ganttInstance.current.showOverAllocation = ganttInstance.current
        .showOverAllocation
        ? false
        : true;
    }
  };

  return (
    <Space direction="vertical" size="large" className={styles.main}>
      <GanttComponent
        dataSource={resourcesData}
        treeColumnIndex={1}
        viewType="ResourceView"
        allowSelection={true}
        allowResizing={true}
        highlightWeekends={true}
        toolbar={toolbar}
        toolbarClick={toolbarClick.bind(this)}
        editSettings={editSettings}
        projectStartDate={projectStartDate}
        projectEndDate={projectEndDate}
        resourceFields={resourceFields}
        taskFields={taskFields}
        taskType={taskType}
        labelSettings={labelSettings}
        splitterSettings={splitterSettings}
        height="600px"
        resources={resourceCollection}
        showOverAllocation={true}
        ref={ganttInstance}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" visible={false}></ColumnDirective>
          <ColumnDirective
            field="TaskName"
            headerText="Name"
            width="250"
          ></ColumnDirective>
          <ColumnDirective field="work" headerText="Work"></ColumnDirective>
          <ColumnDirective field="Progress"></ColumnDirective>
          <ColumnDirective
            field="resourceGroup"
            headerText="Group"
          ></ColumnDirective>
          <ColumnDirective field="StartDate"></ColumnDirective>
          <ColumnDirective field="Duration"></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Selection, DayMarkers, Toolbar, Edit, Resize]} />
      </GanttComponent>
    </Space>
  );
};

export { ResourceViewTab };
