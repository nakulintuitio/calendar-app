import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLoggedIn } from "../features/auth/AuthSlice";
const { Sider } = Layout;

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(isLoggedIn(false));
  };
  return (
    <Sider width={200} theme="light">
      <Menu mode="inline" defaultSelectedKeys={["dashboard"]}>
        <Menu.Item key="dashboard">
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="myEvents">
          <Link to="/myevents">My Events</Link>
        </Menu.Item>
        <Menu.Item key="logout">
          <Link onClick={() => handleLogout()}>Log Out</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
