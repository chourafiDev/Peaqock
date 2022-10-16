import NavBar from "./NavBar";
import SideBar from "./SideBar";

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
    <div className="relative">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} trigger={null}>
          <SideBar handleCollapsed={handleCollapsed} />
        </Sider>

        <Layout className="site-layout">
          <NavBar />
          {children}
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
