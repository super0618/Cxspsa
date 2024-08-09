import { useContext } from "react";
import { Header, Chat } from "../layouts";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { GlobalContext } from "../lib/context";
import styles from "./styles.module.css";

const AdminLayout = () => {
  const { auth } = useContext(GlobalContext);
  const { pathname } = useLocation();

  let backgroundColor = "#fff";

  if (pathname === `${process.env.REACT_APP_BASE_URL || ""}`) {
    backgroundColor = "#fcfcfc";
  }

  return auth ? (
    <>
      <Header />
      <div className={styles.content} style={{ backgroundColor }}>
        <Outlet />
      </div>
      <Chat />
    </>
  ) : (
    <Navigate to={`${process.env.REACT_APP_BASE_URL || ""}/auth/signin`} />
  );
};

export default AdminLayout;
