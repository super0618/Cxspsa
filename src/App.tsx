import { useRoutes } from "react-router-dom";
import "./app.css";

// Layouts
import AdminLayout from "./pages/AdminLayout";

// Import
import Dashboard from "./pages/Dashboard";

function App() {
  const routes = [
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
      ],
    },
  ];

  return useRoutes(routes);
}

export default App;
