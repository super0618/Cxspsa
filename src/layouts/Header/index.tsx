import { Flex, Button, Avatar, Space, Dropdown } from "antd";
import { IconBellFilled, IconHelp, IconUserFilled } from "@tabler/icons-react";
import styles from "./styles.module.css";
import type { MenuProps } from "antd";

interface IconButtonProps {
  children: React.ReactNode;
}

const IconButton = ({ children }: IconButtonProps) => {
  return <div className={styles["icon-button"]}>{children}</div>;
};

const Header = () => {
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
    <header className={styles.header}>
      <Flex align="center" justify="space-between">
        <a href="/" className={styles.logo}>
          COEXSYS
        </a>

        <Button type="primary" size="small">
          Create a New Project
        </Button>

        <Flex align="center" gap={4}>
          <Button type="link">Admin Workbench</Button>

          <IconButton>
            <IconBellFilled color="#666" size={18} />
          </IconButton>

          <IconButton>
            <IconHelp color="#666" size={18} />
          </IconButton>

          <Dropdown menu={{ items }} trigger={["click"]}>
            <Space wrap={false} size={4} className={styles.profile}>
              <Avatar size={28} icon={<IconUserFilled size={18} />} />
              Thomas
            </Space>
          </Dropdown>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
