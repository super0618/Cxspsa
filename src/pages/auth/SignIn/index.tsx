import { useContext, useState } from "react";
import { Space, Form, Input, Flex, Button, notification } from "antd";
import { GlobalContext } from "../../../lib/context";
import { IconMail, IconLock } from "@tabler/icons-react";
import request from "../../../utils/request";
import styles from "./styles.module.css";

type FieldType = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { setAuth, setCurrentProject, setProjects, setProfile, setOwners } =
    useContext(GlobalContext);
  const [api, contextHolder] = notification.useNotification();
  const [error, setError] = useState<FieldType>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (payload: FieldType) => {
    try {
      setLoading(true);
      const result: any = await request.post("login", payload);
      setError({ email: "", password: "" });
      request.setToken(result.token);
      setAuth(true);
      setProfile(result.user);
      setCurrentProject(result.projects.length ? result.projects[0] : {});
      setProjects(result.projects);
      setOwners(result.owners);
    } catch (error: any) {
      api.error({ message: error.name, description: error.message });
      setError({
        email: "",
        password: "",
        [error.target]: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onFinish={onSubmit} className={styles.side}>
      {contextHolder}
      <Space direction="vertical" size="small" className={styles.main}>
        <img src="/images/header_logo.png" alt="logo" className={styles.logo} />
        <p className={styles.leading}>Email</p>
        <Form.Item<FieldType>
          name="email"
          help={<p style={{ fontSize: 12, margin: 0 }}>{error.email}</p>}
          validateStatus={error.email ? "error" : "success"}
        >
          <Input
            prefix={<IconMail size={18} />}
            size="large"
            readOnly={loading}
          />
        </Form.Item>
      </Space>

      <Space direction="vertical" size="small" className={styles.main}>
        <p className={styles.leading}>Password</p>
        <Form.Item<FieldType>
          name="password"
          help={<p style={{ fontSize: 12, margin: 0 }}>{error.password}</p>}
          validateStatus={error.password ? "error" : "success"}
        >
          <Input
            type="password"
            prefix={<IconLock size={18} />}
            size="large"
            readOnly={loading}
          />
        </Form.Item>
      </Space>

      <Space direction="vertical" size="large" className={styles.main}>
        <Flex justify="end">
          <Button htmlType="submit" type="primary" loading={loading}>
            SignIn
          </Button>
        </Flex>

        <Flex justify="center" gap={8} className={styles.footer}>
          <a href="#">Password Help</a>|
          <a href={`${process.env.REACT_APP_BASE_URL || ""}/auth/signup`}>
            SignUp
          </a>
        </Flex>
      </Space>
    </Form>
  );
};

export default SignIn;
