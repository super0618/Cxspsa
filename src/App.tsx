import { Outlet, useRoutes } from "react-router-dom";
import "./app.css";

// Layouts
import AdminLayout from "./pages/AdminLayout";
import AuthLayout from "./pages/AuthLayout";

// Import
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import OTP from "./pages/auth/OTP";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Navigation from "./pages/Navigation";
import Activity from "./pages/Activity";
import NewProject from "./pages/NewProject";
import Stakeholders from "./pages/Stakeholders";
import Requirements from "./pages/Requirements";
import Assumptions from "./pages/Assumptions";
import RiskManagement from "./pages/RiskManagement";
import ProjectDocuments from "./pages/ProjectDocuments";
import TimeTracking from "./pages/TimeTracking";
import ChangeManagement from "./pages/ChangeManagement";
import Issues from "./pages/Issues";
import ChangeControlBoard from "./pages/ChangeControlBoard";
import ProjectSummary from "./pages/ProjectSummary";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectContacts from "./pages/ProjectContacts";
import ShareProject from "./pages/ShareProject";
import Collaboration from "./pages/Collaboration";
import ManageProjectAccess from "./pages/ManageProjectAccess";
import ChangeManagementEntry from "./pages/ChangeManagementEntry";
import Loading from "./pages/Loading";

// Context
import { useContext } from "react";
import { GlobalContext } from "./lib/context";

function App() {
  const { loading } = useContext(GlobalContext);

  const routes = [
    {
      path: "",
      element: loading ? <Loading /> : <Outlet />,
      children: [
        {
          path: `${process.env.REACT_APP_BASE_URL || ""}`,
          element: <AdminLayout />,
          children: [
            { path: "", element: <Landing /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "navigation", element: <Navigation /> },
            { path: "activity", element: <Activity /> },
            { path: "new_project", element: <NewProject /> },
            { path: "stakeholders", element: <Stakeholders /> },
            { path: "requirements", element: <Requirements /> },
            { path: "assumptions", element: <Assumptions /> },
            { path: "risk_management", element: <RiskManagement /> },
            { path: "project_documents", element: <ProjectDocuments /> },
            { path: "time_tracking", element: <TimeTracking /> },
            { path: "change_management", element: <ChangeManagement /> },
            { path: "issues", element: <Issues /> },
            { path: "ccb", element: <ChangeControlBoard /> },
            { path: "project_summary", element: <ProjectSummary /> },
            { path: "project_details", element: <ProjectDetails /> },
            { path: "project_contacts", element: <ProjectContacts /> },
            { path: "share_project", element: <ShareProject /> },
            { path: "collaboration", element: <Collaboration /> },
            { path: "manage_project_access", element: <ManageProjectAccess /> },
            {
              path: "change_management_entry",
              element: <ChangeManagementEntry />,
            },
          ],
        },
        {
          path: `${process.env.REACT_APP_BASE_URL || ""}/auth`,
          element: <AuthLayout />,
          children: [
            { path: "signin", element: <SignIn /> },
            { path: "signup", element: <SignUp /> },
            { path: "otp", element: <OTP /> },
          ],
        },
      ],
    },
  ];

  return useRoutes(routes);
}

export default App;
