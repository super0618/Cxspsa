import { Space, Input, Flex, Button } from "antd";
import { IconUser, IconLock } from "@tabler/icons-react";
import styles from "./styles.module.css";

const SignUp = () => {
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
        <a href={`${process.env.REACT_APP_BASE_URL || ""}/auth/signin`}>
          Already have an account? SignIn
        </a>
      </Space>

      <Flex justify="end">
        <Button>Create an Account</Button>
      </Flex>
    </Space>
  );
};

export default SignUp;
