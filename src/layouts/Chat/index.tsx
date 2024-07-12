import { useState } from "react";
import { Drawer, Button, Input } from "antd";
import { IconMessage2 } from "@tabler/icons-react";
import styles from "./styles.module.css";

const Chat = () => {
  const [open, setOpen] = useState(false);

  const showSidebar = () => {
    setOpen(true);
  };

  const hideSidebar = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        size="large"
        icon={<IconMessage2 />}
        shape="circle"
        onClick={showSidebar}
        className={styles.btn}
      />
      <Drawer
        title="Collaborate with your Team"
        onClose={hideSidebar}
        open={open}
      >
        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.leading}>Send To</p>
            <Input />
          </div>

          <div className={styles.body}>Content Here</div>

          <div className={styles.footer}>
            <Input />
            <Button type="primary">Send</Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Chat;
