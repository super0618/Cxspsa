import { Space, Popover, Tabs } from "antd";
import type { TabsProps } from "antd";
import { IconButton } from "../../common";
import { IconBellFilled } from "@tabler/icons-react";
import styles from "./styles.module.css";

interface NotifyItemProps {
  time: string;
  children: string;
}

const NotifyItem = ({ time, children }: NotifyItemProps) => {
  return (
    <div className={styles.notification}>
      {children}
      <p className={styles.timestamp}>{time}</p>
    </div>
  );
};

const Notification = () => {
  const notificationContent = (
    <Space direction="vertical" size="small" className={styles.main}>
      <NotifyItem time="2 mins ago">
        @JohnSmith Approved your Timesheet
      </NotifyItem>
      <NotifyItem time="1 min ago">
        @Bob has updated the task you are assigned to
      </NotifyItem>
    </Space>
  );

  const mentionContent = (
    <Space direction="vertical" size="small" className={styles.main}>
      <NotifyItem time="2 mins ago">@John Smith Mentioned you</NotifyItem>
    </Space>
  );

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Notifications",
      children: <div className={styles.body}>{notificationContent}</div>,
    },
    {
      key: "2",
      label: "Mentions",
      children: <div className={styles.body}>{mentionContent}</div>,
    },
  ];

  const content = (
    <div className={styles.container}>
      <Tabs
        defaultActiveKey="1"
        items={items}
        tabPosition="top"
        tabBarStyle={{ marginBottom: 8 }}
      />
    </div>
  );

  return (
    <Popover content={content} trigger="click">
      <div>
        <IconButton>
          <IconBellFilled color="#666" size={18} />
        </IconButton>
      </div>
    </Popover>
  );
};

export { Notification };
