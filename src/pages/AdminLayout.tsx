import { Header } from "../layouts";
import { useLocation, Outlet } from "react-router-dom";
import styles from "./styles.module.css";

const AdminLayout = () => {
  const { pathname } = useLocation();

  let backgroundColor = "#fff";

  if (pathname === "/") {
    backgroundColor = "#fcfcfc";
  }

  return (
    <>
      <Header />
      <div className={styles.content} style={{ backgroundColor }}>
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
