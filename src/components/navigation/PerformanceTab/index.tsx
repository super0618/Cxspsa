import { Space, Select, Flex, Button } from "antd";
import {
  TreeGridComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-treegrid";
import { Line } from "react-chartjs-2";
import * as Utils from "../../../utils/chartjs";
import { sampleData } from "../../../data";
import styles from "./styles.module.css";

const PerformanceTab = () => {
  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

  const labels = Utils.months({ count: 7 });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      },
      {
        label: "Dataset 2",
        data: Utils.numbers(NUMBER_CFG),
        borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      },
    ],
  };

  return (
    <Space direction="vertical" size="large" className={styles.main}>
      <Flex align="center" justify="space-between">
        <Select className={styles.select} defaultValue={["1"]}>
          <Select.Option value="1">Option1</Select.Option>
          <Select.Option value="2">Option2</Select.Option>
          <Select.Option value="3">Option3</Select.Option>
        </Select>
        <Button type="primary">PDF</Button>
      </Flex>

      <Space direction="vertical" size="small" className={styles.main}>
        <p className={styles.heading}>Performance</p>
        <Line
          data={data}
          width={600}
          options={{
            responsive: true,
            plugins: { legend: { position: "bottom" } },
          }}
        />
      </Space>

      <Space direction="vertical" size="small" className={styles.main}>
        <p className={styles.heading}>TreeGrid</p>
        <TreeGridComponent
          dataSource={sampleData}
          treeColumnIndex={1}
          childMapping="subtasks"
          height="410"
        >
          <ColumnsDirective>
            <ColumnDirective
              field="taskID"
              headerText="Task ID"
              width="70"
              textAlign="Right"
            ></ColumnDirective>
            <ColumnDirective
              field="taskName"
              headerText="Task Name"
              width="200"
            ></ColumnDirective>
            <ColumnDirective
              field="startDate"
              headerText="Start Date"
              width="90"
              format="yMd"
              textAlign="Right"
            />
            <ColumnDirective
              field="endDate"
              headerText="End Date"
              width="90"
              format="yMd"
              textAlign="Right"
            />
            <ColumnDirective
              field="duration"
              headerText="Duration"
              width="90"
              textAlign="Right"
            />
            <ColumnDirective
              field="progress"
              headerText="Progress"
              width="90"
              textAlign="Right"
            />
            <ColumnDirective
              field="priority"
              headerText="Priority"
              width="90"
            />
          </ColumnsDirective>
        </TreeGridComponent>
      </Space>
    </Space>
  );
};

export { PerformanceTab };
