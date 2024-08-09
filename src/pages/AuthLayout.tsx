import { useContext } from "react";
import { GlobalContext } from "../lib/context";
import { Outlet, Navigate } from "react-router-dom";
import styles from "./styles.module.css";

const AuthLayout = () => {
  const { auth } = useContext(GlobalContext);

  return auth ? (
    <Navigate to={`${process.env.REACT_APP_BASE_URL || ""}/navigation`} />
  ) : (
    <div className={styles["full-screen"]}>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
