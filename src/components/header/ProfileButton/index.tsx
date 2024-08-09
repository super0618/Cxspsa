import { useContext } from "react";
import { Dropdown, Space, Avatar, Flex } from "antd";
import type { MenuProps } from "antd";
import { IconChevronDown, IconUserFilled } from "@tabler/icons-react";
import { GlobalContext } from "../../../lib/context";
import request from "../../../utils/request";
import styles from "./styles.module.css";

const ProfileButton = () => {
  const { setAuth, profile, setProfile } = useContext(GlobalContext);

  const onLogout = () => {
    request.clearToken();
    setAuth(false);
    setProfile({});
  };

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
      label: <a href="#">My Login History</a>,
    },
    {
      key: "4",
      label: <div onClick={onLogout}>Logout</div>,
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Flex wrap={false} align="center" gap={4} className={styles.profile}>
        <p className={styles.leading}>{profile.full_name}</p>
        <IconChevronDown size={16} />
      </Flex>
    </Dropdown>
  );
};

export { ProfileButton };
