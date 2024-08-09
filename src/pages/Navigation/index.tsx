import { Button, Flex, Select, Space, Tabs } from "antd";
import type { TabsProps } from "antd";
import { IconButton } from "../../components/common";

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
import { useContext } from "react";
import { GlobalContext } from "../../lib/context";
import styles from "./styles.module.css";

const Navigation = () => {
  const { currentProject, projects, owners } = useContext(GlobalContext);

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
            <Select
              defaultValue={[currentProject.project_id]}
              className={styles.select}
            >
              {projects.map((project: any) => (
                <Select.Option
                  key={project.project_id}
                  value={project.project_id}
                >
                  {project.project_name}
                </Select.Option>
              ))}
            </Select>
            <IconButton
              href={`${process.env.REACT_APP_BASE_URL || ""}/new_project`}
              tooltip="New Project"
            >
              <img
                src="/icons/icon-new_project.svg"
                alt="New Project"
                width="20"
              />
            </IconButton>
          </Flex>

          <Flex align="center">
            <IconButton
              href={`${process.env.REACT_APP_BASE_URL || ""}/stakeholders`}
              tooltip="Stakeholders"
            >
              <img
                src="/icons/icon-stakeholders.svg"
                alt="Stakeholders"
                width="20"
              />
            </IconButton>
            <IconButton
              href={`${process.env.REACT_APP_BASE_URL || ""}/requirements`}
              tooltip="Scope/Requirements"
            >
              <img src="/icons/icon-scope.svg" alt="Requirements" width="20" />
            </IconButton>
            <IconButton
              href={`${process.env.REACT_APP_BASE_URL || ""}/assumptions`}
              tooltip="Assumptions"
            >
              <img
                src="/icons/icon-assumptions.svg"
                alt="Assumptions"
                width="20"
              />
            </IconButton>
            <IconButton
              href={`${process.env.REACT_APP_BASE_URL || ""}/risk_management`}
              tooltip="Risks Management"
            >
              <img
                src="/icons/icon-risks.svg"
                alt="Risks Management"
                width="20"
              />
            </IconButton>
            <IconButton
              href={`${process.env.REACT_APP_BASE_URL || ""}/project_documents`}
              tooltip="Project Documents"
            >
              <img
                src="/icons/icon-documents.svg"
                alt="Project Documents"
                width="20"
              />
            </IconButton>
            <IconButton
              href={`${process.env.REACT_APP_BASE_URL || ""}/time_tracking`}
              tooltip="Time Tracking"
            >
              <img
                src="/icons/icon-time_tracking.svg"
                alt="Time Tracking"
                width="20"
              />
            </IconButton>
            <IconButton
              href={`${process.env.REACT_APP_BASE_URL || ""}/change_management`}
              tooltip="Change Management"
            >
              <img
                src="/icons/icon-change.svg"
                alt="Change Management"
                width="20"
              />
            </IconButton>
            <IconButton
              href={`${process.env.REACT_APP_BASE_URL || ""}/issues`}
              tooltip="Issues"
            >
              <img src="/icons/icon-issue.svg" alt="Issues" width="20" />
            </IconButton>
            <IconButton
              href={`${process.env.REACT_APP_BASE_URL || ""}/ccb`}
              tooltip="Change Control Board"
            >
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
            <p className={styles.leading}>
              {currentProject.schedule_start_date}
            </p>
          </Flex>
          <Flex align="center" gap={4}>
            <p className={styles.heading}>Schedule End:</p>
            <p className={styles.leading}>{currentProject.schedule_end_date}</p>
          </Flex>
          <Flex align="center" gap={4}>
            <p className={styles.heading}>Timesheet Period Type:</p>
            <p className={styles.leading}>{currentProject.period_type}</p>
          </Flex>
        </Flex>

        <Flex align="center" gap={8}>
          <p className={styles.heading}>Project Owner:</p>
          <Select
            defaultValue={[currentProject.project_owner || 0]}
            className={styles.select}
          >
            <Select.Option value={0}>No Owner</Select.Option>
            {owners.map((owner: any) => (
              <Select.Option key={owner.id} value={owner.id}>
                {owner.full_name}
              </Select.Option>
            ))}
          </Select>
        </Flex>

        <Flex align="center" justify="space-between">
          <Flex align="center" gap={4}>
            <IconButton
              href={`${process.env.REACT_APP_BASE_URL || ""}/project_summary`}
              tooltip="Project Summary"
            >
              <img
                src="/icons/icon-project_summary.svg"
                alt="Project Summary"
                width="20"
              />
            </IconButton>
            <IconButton
              href={`${process.env.REACT_APP_BASE_URL || ""}/project_details`}
              tooltip="Project Details"
            >
              <img
                src="/icons/icon-launch_details.svg"
                alt="Project Details"
                width="20"
              />
            </IconButton>
            <IconButton
              href={`${process.env.REACT_APP_BASE_URL || ""}/project_contacts`}
              tooltip="Project Contacts"
            >
              <img
                src="/icons/icon-project_contacts.svg"
                alt="Project Contacts"
                width="20"
              />
            </IconButton>
            <IconButton
              href={`${process.env.REACT_APP_BASE_URL || ""}/share_project`}
              tooltip="Share Project"
            >
              <img
                src="/icons/icon-share_project.svg"
                alt="Share Project"
                width="20"
              />
            </IconButton>
            <IconButton
              href={`${process.env.REACT_APP_BASE_URL || ""}/collaboration`}
              tooltip="Collaboration"
            >
              <img
                src="/icons/icon-team_collaboration.svg"
                alt="Collaboration"
                width="20"
              />
            </IconButton>
            <IconButton
              href={`${
                process.env.REACT_APP_BASE_URL || ""
              }/manage_project_access`}
              tooltip="Manage Project Access"
            >
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
