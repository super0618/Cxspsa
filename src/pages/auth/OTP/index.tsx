import { Space, Input, Flex, Button } from "antd";
import OTP from "antd/es/input/OTP";
import styles from "./styles.module.css";

const OTPUI = () => {
  return (
    <Space direction="vertical" size="large" className={styles.side}>
      <Space direction="vertical" size="small" className={styles.main}>
        <img src="/images/header_logo.png" alt="logo" className={styles.logo} />
        <p className={styles.leading}>
          Enter your OTP Code from your registered email
        </p>
        <OTP size="large" />
      </Space>

      <Flex justify="end">
        <Button>Proceed to SignIn</Button>
      </Flex>

      <Flex justify="center" gap={8} className={styles.footer}>
        <a href="#">Password Help</a>|<a href="/auth/signup">SignUp</a>
      </Flex>
    </Space>
  );
};

export default OTPUI;
