import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";

const AuthLayout = () => {
  return (
    <div className={styles["full-screen"]}>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
