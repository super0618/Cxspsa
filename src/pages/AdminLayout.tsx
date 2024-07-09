import { Header, Content } from "../layouts";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default AdminLayout;
