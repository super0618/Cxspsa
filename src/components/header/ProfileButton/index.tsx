import { Dropdown, Space, Avatar } from "antd";
import type { MenuProps } from "antd";
import { IconUserFilled } from "@tabler/icons-react";
import styles from "./styles.module.css";

const ProfileButton = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a href="#">Knowledgebase</a>,
    },
    {
      key: "2",
      label: <a href="#">Subscription Info</a>,
    },
    {
      key: "3",
      label: <a href="#">Logout</a>,
    },
    {
      key: "4",
      label: <a href="#">My Login History</a>,
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Space wrap={false} size={4} className={styles.profile}>
        <Avatar size={28} icon={<IconUserFilled size={18} />} />
        Thomas
      </Space>
    </Dropdown>
  );
};

export { ProfileButton };
