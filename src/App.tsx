import { useRoutes } from "react-router-dom";
import "./app.css";

// Import Pages
import Dashboard from "./pages/Dashboard";

function App() {
  const routes = [
    {
      path: "/",
      element: <Dashboard />,
    },
  ];

  return useRoutes(routes);
}

export default App;
