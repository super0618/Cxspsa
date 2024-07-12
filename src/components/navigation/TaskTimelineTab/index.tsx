import { Space } from "antd";
import {
  GanttComponent,
  Inject,
  Selection,
  DayMarkers,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-gantt";
import type { TimelineSettingsModel } from "@syncfusion/ej2-react-gantt";
import { timelineTemplateData } from "../../../data";
import styles from "./styles.module.css";

const TaskTimelineTab = () => {
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "subtasks",
  };
  const weekDate = (dateString: any) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: "short" };
    return date.toLocaleDateString("en-US", options);
  };
  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const timelineTemplate = (props: any) => {
    if (props.tier == "topTier") {
      return (
        <div className={styles.header} title={props.date}>
          <p className={styles.heading}>{weekDate(props.date)}</p>
          <p className={styles.leading}>{formatDate(props.date)}</p>
          <img width={20} height={20} src={`/icons/icon-${props.value}.svg`} />
        </div>
      );
    }
  };
  const splitterSettings = { columnIndex: 1 };
  const timelineSettings: TimelineSettingsModel = {
    topTier: { unit: "Day" },
    timelineUnitSize: 200,
  };
  const labelSettings = { leftLabel: "TaskName" };
  const projectStartDate = new Date("03/31/2024");
  const projectEndDate = new Date("04/23/2024");

  return (
    <Space direction="vertical" size="large" className={styles.main}>
      <GanttComponent
        dataSource={timelineTemplateData}
        splitterSettings={splitterSettings}
        taskFields={taskFields}
        height="600px"
        projectStartDate={projectStartDate}
        projectEndDate={projectEndDate}
        timelineSettings={timelineSettings}
        timelineTemplate={timelineTemplate}
        labelSettings={labelSettings}
        treeColumnIndex={1}
      >
        <ColumnsDirective>
          <ColumnDirective field="TaskID" visible={false}></ColumnDirective>
          <ColumnDirective field="TaskName" width={300}></ColumnDirective>
          <ColumnDirective field="StartDate"></ColumnDirective>
          <ColumnDirective field="EndDate"></ColumnDirective>
          <ColumnDirective field="Duration"></ColumnDirective>
          <ColumnDirective field="Progress"></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Selection, DayMarkers]} />
      </GanttComponent>
    </Space>
  );
};

export { TaskTimelineTab };
