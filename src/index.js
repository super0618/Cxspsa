import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { registerLicense } from "@syncfusion/ej2-base";
import App from "./App";

// Registering Syncfusion License Key
registerLicense(
  "MzM3NjA1N0AzMjM2MmUzMDJlMzBwQkdWbW1LQXJWU1N4dy9IMHprSk9RWXdOZ0tYVzlkbklveVBuOSthb3pvPQ==;ORg4AjUWIQA/Gnt2U1hhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX5Ud0ViUXpacHxRQ2Nd"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#8a8e8e",
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
