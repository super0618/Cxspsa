import { Space, Input, Flex, Button } from "antd";
import { IconUser, IconLock } from "@tabler/icons-react";
import styles from "./styles.module.css";

const SignIn = () => {
  return (
    <Space direction="vertical" size="large" className={styles.side}>
      <Space direction="vertical" size="small" className={styles.main}>
        <img src="/images/header_logo.png" alt="logo" className={styles.logo} />
        <p className={styles.leading}>UserName</p>
        <Input prefix={<IconUser size={18} />} size="large" />
      </Space>

      <Space direction="vertical" size="small" className={styles.main}>
        <p className={styles.leading}>Password</p>
        <Input type="password" prefix={<IconLock size={18} />} size="large" />
      </Space>

      <Flex justify="end">
        <Button>SignIn</Button>
      </Flex>

      <Flex justify="center" gap={8} className={styles.footer}>
        <a href="#">Password Help</a>|<a href="/auth/signup">SignUp</a>
      </Flex>
    </Space>
  );
};

export default SignIn;
