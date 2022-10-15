import NavBar from "./NavBar";
import SideBar from "./SideBar";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout } from "antd";
import React, { useState } from "react";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

interface IProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* <div> */}
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        //   onCollapse={(value) => setCollapsed(value)}
        // className="my-10"
      >
        <SideBar handleCollapsed={handleCollapsed} />
      </Sider>
      {/* </div> */}

      <Layout className="site-layout">
        <NavBar />
        {children}
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
