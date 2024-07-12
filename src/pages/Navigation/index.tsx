import { Button, Flex, Select, Space, Tabs } from "antd";
import type { TabsProps } from "antd";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import type { Position } from "@syncfusion/ej2-react-popups";
import {
  MainTab,
  ResourceAllocationTab,
  ResourceViewTab,
  KanbanTab,
  TaskTimelineTab,
  BaselineTab,
  CriticalPathTab,
  PerformanceTab,
} from "../../components/navigation";
import styles from "./styles.module.css";

interface IconButtonProps {
  tooltip?: string;
  position?: Position;
  children: React.ReactNode;
}

const IconButton = ({
  tooltip = "",
  position = "TopCenter",
  children,
}: IconButtonProps) => {
  const tooltipMessage = tooltip.trim();
  const content = <div className={styles["icon-button"]}>{children}</div>;

  if (!tooltipMessage) {
    return content;
  } else {
    return (
      <TooltipComponent content={tooltipMessage} position={position}>
        {content}
      </TooltipComponent>
    );
  }
};

const Navigation = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Main",
      children: <MainTab />,
    },
    {
      key: "2",
      label: "Resource Allocation",
      children: <ResourceAllocationTab />,
    },
    {
      key: "3",
      label: "Resource View",
      children: <ResourceViewTab />,
    },
    {
      key: "4",
      label: "Kanban",
      children: <KanbanTab />,
    },
    {
      key: "5",
      label: "TaskTimeline",
      children: <TaskTimelineTab />,
    },
    {
      key: "6",
      label: "Baseline",
      children: <BaselineTab />,
    },
    {
      key: "7",
      label: "Critical Path",
      children: <CriticalPathTab />,
    },
    {
      key: "8",
      label: "Performance",
      children: <PerformanceTab />,
    },
  ];

  return (
    <Space direction="vertical" size="small" className={styles.main}>
      <Space direction="vertical" size="small" className={styles.main}>
        <Flex align="center" gap={64}>
          <Flex align="center" gap={14}>
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

          <Flex align="center">
            <IconButton tooltip="Stakeholders">
              <img
                src="/icons/icon-stakeholders.svg"
                alt="Stakeholders"
                width="20"
              />
            </IconButton>
            <IconButton tooltip="Scope/Requirements">
              <img src="/icons/icon-scope.svg" alt="Requirements" width="20" />
            </IconButton>
            <IconButton tooltip="Assumptions">
              <img
                src="/icons/icon-assumptions.svg"
                alt="Assumptions"
                width="20"
              />
            </IconButton>
            <IconButton tooltip="Risks Management">
              <img
                src="/icons/icon-risks.svg"
                alt="Risks Management"
                width="20"
              />
            </IconButton>
            <IconButton tooltip="Project Documents">
              <img
                src="/icons/icon-documents.svg"
                alt="Project Documents"
                width="20"
              />
            </IconButton>
            <IconButton tooltip="Time Tracking">
              <img
                src="/icons/icon-time_tracking.svg"
                alt="Time Tracking"
                width="20"
              />
            </IconButton>
            <IconButton tooltip="Change Management">
              <img
                src="/icons/icon-change.svg"
                alt="Change Management"
                width="20"
              />
            </IconButton>
            <IconButton tooltip="Issues">
              <img src="/icons/icon-issue.svg" alt="Issues" width="20" />
            </IconButton>
            <IconButton tooltip="Change Control Board">
              <img
                src="/icons/icon-ccb.svg"
                alt="Change Control Board"
                width="20"
              />
            </IconButton>
          </Flex>
        </Flex>

        <Flex align="center" gap={16}>
          <Flex align="center" gap={4}>
            <p className={styles.heading}>Schedule Start:</p>
            <p className={styles.leading}>11/07/2024</p>
          </Flex>
          <Flex align="center" gap={4}>
            <p className={styles.heading}>Schedule End:</p>
            <p className={styles.leading}>11/07/2024</p>
          </Flex>
          <Flex align="center" gap={4}>
            <p className={styles.heading}>TimeZone:</p>
            <p className={styles.leading}>PST</p>
          </Flex>
          <Flex align="center" gap={4}>
            <p className={styles.heading}>Timesheet Period Type:</p>
            <p className={styles.leading}>Monthly</p>
          </Flex>
        </Flex>

        <Flex align="center" gap={8}>
          <p className={styles.heading}>Project Owner:</p>
          <Select defaultValue={["1"]} className={styles.select}>
            <Select.Option value="1">Owner1</Select.Option>
            <Select.Option value="2">Owner2</Select.Option>
            <Select.Option value="3">Owner3</Select.Option>
          </Select>
        </Flex>

        <Flex align="center" justify="space-between">
          <Flex align="center" gap={4}>
            <IconButton tooltip="Project Summary">
              <img
                src="/icons/icon-project_summary.svg"
                alt="Project Summary"
                width="20"
              />
            </IconButton>
            <IconButton tooltip="Project Details">
              <img
                src="/icons/icon-launch_details.svg"
                alt="Project Details"
                width="20"
              />
            </IconButton>
            <IconButton tooltip="Project Contacts">
              <img
                src="/icons/icon-project_contacts.svg"
                alt="Project Contacts"
                width="20"
              />
            </IconButton>
            <IconButton tooltip="Share Project">
              <img
                src="/icons/icon-share_project.svg"
                alt="Share Project"
                width="20"
              />
            </IconButton>
            <IconButton tooltip="Collaboration">
              <img
                src="/icons/icon-team_collaboration.svg"
                alt="Collaboration"
                width="20"
              />
            </IconButton>
            <IconButton tooltip="Manage Project Access">
              <img
                src="/icons/icon-manage_access.svg"
                alt="Time Tracking"
                width="20"
              />
            </IconButton>
          </Flex>

          <Button type="primary">Close Project</Button>
        </Flex>
      </Space>

      <Tabs defaultActiveKey="1" items={items} tabPosition="top" />
    </Space>
  );
};

export default Navigation;
