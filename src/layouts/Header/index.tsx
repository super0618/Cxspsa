import { Flex, Button } from "antd";
import { IconHelp } from "@tabler/icons-react";
import { Notification, ProfileButton } from "../../components/header";
import { useNavigate, Link } from "react-router-dom";
import { IconButton } from "../../components/common/index";
import styles from "./styles.module.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <Flex align="center" justify="space-between">
        <Flex align="center" justify="space-between" gap={16}>
          <Link
            to={`${process.env.REACT_APP_BASE_URL || ""}/`}
            className={styles.logo}
          >
            COEXSYS
          </Link>

          <div
            onClick={() =>
              navigate(`${process.env.REACT_APP_BASE_URL || ""}/new_project`)
            }
            className={styles.btn}
          >
            New Project
          </div>
        </Flex>

        <Flex align="center">
          <Button
            type="link"
            onClick={() =>
              navigate(`${process.env.REACT_APP_BASE_URL || ""}/dashboard`)
            }
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
