import { useRoutes } from "react-router-dom";
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

import { registerLicense } from "@syncfusion/ej2-base";

function App() {
  registerLicense(process.env.SYNCFUSION_LICENSE_KEY as string);

  const routes = [
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <Landing />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "navigation",
          element: <Navigation />,
        },
        {
          path: "activity",
          element: <Activity />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "signin",
          element: <SignIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "otp",
          element: <OTP />,
        },
      ],
    },
  ];

  return useRoutes(routes);
}

export default App;
