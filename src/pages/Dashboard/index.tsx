import { Tabs } from "antd";
import type { TabsProps } from "antd";
import {
  DashboardTab,
  ManageSubscriptionsTab,
  TechSupportTab,
  PaymentHistoryTab,
  AccountInformationTab,
  HolidayCalendarTab,
} from "../../components/dashboard";
import styles from "./styles.module.css";

const Dashboard = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Dashboard",
      children: <DashboardTab />,
    },
    {
      key: "2",
      label: "Manage Subscriptions",
      children: <ManageSubscriptionsTab />,
    },
    {
      key: "3",
      label: "Tech Support",
      children: <TechSupportTab />,
    },
    {
      key: "4",
      label: "Payment History",
      children: <PaymentHistoryTab />,
    },
    {
      key: "5",
      label: "Account Information",
      children: <AccountInformationTab />,
    },
    {
      key: "6",
      label: "Holiday Calendar",
      children: <HolidayCalendarTab />,
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} tabPosition="top" />;
};

export default Dashboard;
