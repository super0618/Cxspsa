import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import {
  Chart,
  LineElement,
  ArcElement,
  Legend,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import App from "./App";
import { GlobalContextProvider } from "./lib/context";
import { registerLicense } from "@syncfusion/ej2-base";

// Register Syncfusion License Key
registerLicense(process.env.REACT_APP_SYNCFUION_LICENSE_KEY || "");

// Register Element for Chart.js
Chart.register(
  LineElement,
  ArcElement,
  Legend,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ConfigProvider theme={{ token: { colorPrimary: "#8a8e8e" } }}> */}
    <GlobalContextProvider>
      <ConfigProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </GlobalContextProvider>
  </React.StrictMode>
);
