import { Flex, Select, Space } from "antd";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import styles from "./styles.module.css";

interface IconButtonProps {
  tooltip: string;
  children: React.ReactNode;
}

const IconButton = ({ tooltip, children }: IconButtonProps) => {
  return (
    <TooltipComponent content={tooltip} position="TopCenter">
      <div className={styles["icon-button"]}>{children}</div>
    </TooltipComponent>
  );
};

const Navigation = () => {
  return (
    <Space direction="vertical" size="large" className={styles.main}>
      <Flex align="center" gap={64}>
        <Flex align="center" gap={16}>
          <p className={styles.heading}>Project Name:</p>
          <Select defaultValue={["1"]} className={styles.select}>
            <Select.Option value="1">Project1</Select.Option>
            <Select.Option value="2">Project2</Select.Option>
            <Select.Option value="3">Project3</Select.Option>
          </Select>
          <IconButton tooltip="Create New Project">
            <img
              src="/icons/icon-new_project.svg"
              alt="Stakeholders"
              width="20"
            />
          </IconButton>
        </Flex>

        <Flex align="center" gap={8}>
          <IconButton tooltip="Stakeholders">
            <img
              src="/icons/icon-stakeholders.svg"
              alt="Stakeholders"
              width="20"
            />
          </IconButton>
          <IconButton tooltip="Scope/Requirements">
            <img src="/icons/icon-scope.svg" alt="Stakeholders" width="20" />
          </IconButton>
          <IconButton tooltip="Assumptions">
            <img
              src="/icons/icon-assumptions.svg"
              alt="Stakeholders"
              width="20"
            />
          </IconButton>
          <IconButton tooltip="Risks Management">
            <img src="/icons/icon-risks.svg" alt="Stakeholders" width="20" />
          </IconButton>
          <IconButton tooltip="Project Documents">
            <img
              src="/icons/icon-documents.svg"
              alt="Stakeholders"
              width="20"
            />
          </IconButton>
          <IconButton tooltip="Time Tracking">
            <img
              src="/icons/icon-time_tracking.svg"
              alt="Stakeholders"
              width="20"
            />
          </IconButton>
          <IconButton tooltip="Change Management">
            <img src="/icons/icon-change.svg" alt="Stakeholders" width="20" />
          </IconButton>
          <IconButton tooltip="Issues">
            <img src="/icons/icon-issue.svg" alt="Stakeholders" width="20" />
          </IconButton>
          <IconButton tooltip="Change Control Board">
            <img src="/icons/icon-ccb.svg" alt="Stakeholders" width="20" />
          </IconButton>
        </Flex>
      </Flex>
    </Space>
  );
};

export default Navigation;
