import { Space, Radio, Flex, Button, Input } from "antd";
import styles from "./styles.module.css";

const ShareProject = () => {
  return (
    <Space direction="vertical" size="large" className={styles.main}>
      <Flex align="center" gap={8}>
        <p className={styles.heading}>Project:</p>
        <p className={styles.leading}>
          DIGITAL MARKETING INITIATIVES (CXS00015)
        </p>
      </Flex>

      <Space direction="vertical" size="small" className={styles.main}>
        <Radio value={1}>Anyone with following link can get an access</Radio>
        <a href="https://tinyurl.com/2joex5us">https://tinyurl.com/2joex5us</a>
        <p className={styles.danger}>
          Attention: You have selected a non-secure way of sharing this project
          link. This means anyone over the internet with this link can view to
          your project information. If that is not desired, please select the
          secure option below
        </p>
        <Flex justify="end">
          <Button type="primary">Copy to Clipboard</Button>
        </Flex>
      </Space>

      <Space direction="vertical" size="small" className={styles.main}>
        <Radio value={2}>Only selected people will get an access</Radio>
        <p className={styles.leading}>
          Enter email addresses seperated by a semicolon (If more than one email
          addresses are entered.)
        </p>
        <Input.TextArea rows={6} />
        <Flex justify="end">
          <Button type="primary">Send a Secure Link</Button>
        </Flex>
      </Space>
    </Space>
  );
};

export default ShareProject;
