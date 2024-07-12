import { useRef } from "react";
import { Space } from "antd";
import {
  GanttComponent,
  ColumnsDirective,
  ColumnDirective,
  Selection,
  Inject,
} from "@syncfusion/ej2-react-gantt";
import type { TimelineSettingsModel } from "@syncfusion/ej2-react-gantt";
import { baselineData } from "../../../data";
import styles from "./styles.module.css";

const BaselineTab = () => {
  const taskFields = {
    id: "TaskId",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    baselineStartDate: "BaselineStartDate",
    baselineEndDate: "BaselineEndDate",
  };
  const ganttInstance = useRef<GanttComponent>(null);
  const projectStartDate = new Date("03/05/2024 09:30:00 AM");
  const projectEndDate = new Date("03/05/2024 07:00:00 PM");
  const timelineSettings: TimelineSettingsModel = {
    timelineUnitSize: 65,
    topTier: {
      unit: "None",
    },
    bottomTier: {
      unit: "Minutes",
      count: 15,
      format: "hh:mm a",
    },
  };
  let dayWorkingTime = [{ from: 0, to: 24 }];
  const tooltipTemplate = (props: any) => {
    return (
      <table>
        <tbody>
          <tr>
            <td colSpan={3}>{props.TaskName}</td>
          </tr>
          <tr>
            <td> Start Time </td> <td>:</td>
            <td>{ganttInstance.current!.getFormatedDate(props.StartDate)}</td>
          </tr>
          <tr>
            <td> End Time</td> <td>:</td>
            <td>{ganttInstance.current!.getFormatedDate(props.EndDate)}</td>
          </tr>
          <tr>
            <td> Planned start time</td> <td>:</td>
            <td>
              {ganttInstance.current!.getFormatedDate(props.BaselineStartDate)}
            </td>
          </tr>
          <tr>
            <td> Planned end time</td> <td>:</td>
            <td>
              {ganttInstance.current!.getFormatedDate(props.BaselineEndDate)}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  const template = tooltipTemplate;
  const tooltipSettings = {
    taskbar: template.bind(this),
  };

  return (
    <Space direction="vertical" size="large" className={styles.main}>
      <GanttComponent
        ref={ganttInstance}
        dataSource={baselineData}
        renderBaseline={true}
        dateFormat={"hh:mm a"}
        treeColumnIndex={1}
        allowSelection={true}
        projectStartDate={projectStartDate}
        projectEndDate={projectEndDate}
        taskFields={taskFields}
        timelineSettings={timelineSettings}
        includeWeekend={true}
        height="600px"
        tooltipSettings={tooltipSettings}
        durationUnit="Minute"
        dayWorkingTime={dayWorkingTime}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="TaskName"
            headerText="Service Name"
            width="250"
            clipMode="EllipsisWithTooltip"
          ></ColumnDirective>
          <ColumnDirective
            field="BaselineStartDate"
            headerText="Planned start time"
          ></ColumnDirective>
          <ColumnDirective
            field="BaselineEndDate"
            headerText="Planned end time"
          ></ColumnDirective>
          <ColumnDirective
            field="StartDate"
            headerText="Start time"
          ></ColumnDirective>
          <ColumnDirective
            field="EndDate"
            headerText="End time"
          ></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Selection]} />
      </GanttComponent>
    </Space>
  );
};

export { BaselineTab };
