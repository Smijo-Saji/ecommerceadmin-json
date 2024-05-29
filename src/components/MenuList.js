import { Menu } from "antd";
import React from "react";
import {
  DashboardOutlined,
  MobileOutlined,
  PlusOutlined,
  SettingOutlined,
  BarsOutlined,
  ShoppingOutlined,
  LaptopOutlined,
  CameraOutlined,
  AppstoreAddOutlined,
  EllipsisOutlined,
  CustomerServiceOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

function MenuList() {
  const location = useLocation();
  const path = location.pathname;

  const getKeyFromPath = (path) => {
    switch (path) {
      case "/":
        return "dashboard";
      case "/productlist":
        return "Products";
      case "/addproduct":
        return "addproduct";
      case "/orders":
        return "payment";
      case "/settings":
        return "settings";
      case "/filteredproduct/Phones":
        return "task-1";
      case "/filteredproduct/Computers":
        return "task-2";
      case "/filteredproduct/Cameras":
        return "task-3";
      case "/filteredproduct/In-Ears":
        return "task-5";
      case "/filteredproduct/Accessories":
        return "task-4";
      case "/filteredproduct/Other":
        return "task-6";
      default:
        return "";
    }
  };

  return (
    <div>
      <Menu
        theme="dark"
        mode="inline"
        className="menu-bar"
        selectedKeys={[getKeyFromPath(path)]}
      >
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            {" "}
            DashBoard
          </Link>
        </Menu.Item>
        <Menu.Item key="Products" icon={<ShoppingOutlined />}>
          <Link to={"/productlist"} style={{ textDecoration: "none" }}>
            {" "}
            All Products
          </Link>
        </Menu.Item>
        <Menu.SubMenu key="subtasks" icon={<BarsOutlined />} title="Category">
          <Menu.Item key="task-1" icon={<MobileOutlined />}>
            <Link
              to={"./filteredproduct/Phones"}
              style={{ textDecoration: "none" }}
            >
              {" "}
              Phones
            </Link>
          </Menu.Item>
          <Menu.Item key="task-2" icon={<LaptopOutlined />}>
            <Link
              to={"./filteredproduct/Computers"}
              style={{ textDecoration: "none" }}
            >
              {" "}
              Computers
            </Link>
          </Menu.Item>
          <Menu.Item key="task-3" icon={<CameraOutlined />}>
            <Link
              to={"./filteredproduct/Cameras"}
              style={{ textDecoration: "none" }}
            >
              {" "}
              Cameras
            </Link>
          </Menu.Item>

          <Menu.Item key="task-5" icon={<CustomerServiceOutlined />}>
            <Link
              to={"./filteredproduct/In-Ears"}
              style={{ textDecoration: "none" }}
            >
              {" "}
              In-Ears
            </Link>
          </Menu.Item>
          <Menu.Item key="task-4" icon={<AppstoreAddOutlined />}>
            <Link
              to={"./filteredproduct/Accessories"}
              style={{ textDecoration: "none" }}
            >
              {" "}
              Accessories
            </Link>
          </Menu.Item>
          <Menu.Item key="task-6" icon={<EllipsisOutlined />}>
            <Link
              to={"./filteredproduct/Other"}
              style={{ textDecoration: "none" }}
            >
              {" "}
              Others
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="addproduct" icon={<PlusOutlined />}>
          <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
            Add Product
          </Link>
        </Menu.Item>
        <Menu.Item key="payment" icon={<ShoppingCartOutlined />}>
          <Link to={"/orders"} style={{ textDecoration: "none" }}>
            Orders
          </Link>
        </Menu.Item>
        <Menu.Item key="settings" icon={<SettingOutlined />}>
          <Link to={"/settings"} style={{ textDecoration: "none" }}>
            Settings
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default MenuList;
