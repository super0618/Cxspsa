import { Space, Popover, Tabs } from "antd";
import type { TabsProps } from "antd";
import { IconButton } from "../../common";
import { IconBellFilled } from "@tabler/icons-react";
import moment from "moment";
import styles from "./styles.module.css";

interface NotifyItemProps {
  time: Date;
  message: string;
}

const NotifyItem = ({ time, message }: NotifyItemProps) => {
  return (
    <div className={styles.notification}>
      <p className={styles.leading}>{message}</p>
      <p className={styles.timestamp}>{moment(time).fromNow()}</p>
    </div>
  );
};

const Notification = () => {
  const notifications: NotifyItemProps[] = [
    {
      time: new Date("7/11/2024"),
      message: "@JohnSmith approved your Timesheet",
    },
    {
      time: new Date("7/12/2024"),
      message: "@Bob has updated the task you are assigned to",
    },
  ];

  const mentions: NotifyItemProps[] = [
    {
      time: new Date("7/11/2024"),
      message: "@John Smith mentioned you",
    },
  ];

  const notificationContent = (
    <Space direction="vertical" size="small" className={styles.main}>
      {notifications.map((notification: NotifyItemProps, index: number) => (
        <NotifyItem
          key={index}
          time={notification.time}
          message={notification.message}
        />
      ))}
    </Space>
  );

  const mentionContent = (
    <Space direction="vertical" size="small" className={styles.main}>
      {mentions.map((mention: NotifyItemProps, index: number) => (
        <NotifyItem key={index} time={mention.time} message={mention.message} />
      ))}
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
