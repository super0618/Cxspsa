import { Flex, Button } from "antd";
import { IconHelp } from "@tabler/icons-react";
import { Notification, ProfileButton } from "../../components/header";
import { IconButton } from "../../components/common/index";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Flex align="center" justify="space-between">
        <a
          href={`${process.env.REACT_APP_BASE_URL || ""}/`}
          className={styles.logo}
        >
          COEXSYS
        </a>

        <Button
          type="primary"
          size="small"
          href={`${process.env.REACT_APP_BASE_URL || ""}/new_project`}
        >
          New Project
        </Button>

        <Flex align="center" gap={4}>
          <Button
            type="link"
            href={`${process.env.REACT_APP_BASE_URL || ""}/dashboard`}
          >
            Admin Workbench
          </Button>

          <Notification />

          <IconButton>
            <IconHelp color="#666" size={18} />
          </IconButton>

          <ProfileButton />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
