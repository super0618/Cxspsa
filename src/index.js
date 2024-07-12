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
import { registerLicense } from "@syncfusion/ej2-base";

// Register Syncfusion License Key
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NCaF5cXmZCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXlcd3RUR2lZUE1zV0E="
);

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
    <ConfigProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
