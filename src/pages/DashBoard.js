import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CircularProgressBar from "../components/CircularProgressBar";
import {
  MobileOutlined,
  LaptopOutlined,
  CameraOutlined,
  AppstoreAddOutlined,
  CustomerServiceOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import Calendar from "../components/Calendar";
import { fetchData } from "../Apis";
import "./Dashboard.css"; // Import the CSS file

function DashBoard() {
  const [data, setData] = useState([]);
  const apiCall = async () => {
    const res = await fetchData();
    setData(res);
  };
  useEffect(() => {
    apiCall();
  }, []);
  const Phones = data.filter((i) => i.category === "Phones").length;
  const Computers = data.filter((i) => i.category === "Computers").length;
  const Cameras = data.filter((i) => i.category === "Cameras").length;
  const InEars = data.filter((i) => i.category === "In-Ears").length;
  const Accessories = data.filter((i) => i.category === "Accessories").length;
  const Others = data.filter((i) => i.category === "Other").length;

  return (
    <div className="dashboard-sec my-4">
      <Container>
        <h2 className="text-center"> Dashboard</h2>
        <div className="d-flex justify-content-evenly flex-wrap dashboard-content gap-3">
          <div className="dashboard-item ">
            <CircularProgressBar percentage={Phones}></CircularProgressBar>
            <p className="text-center d-flex gap-2 ">
              <MobileOutlined />
              Phones ({Phones})
            </p>
            <p className={`commonstatus ${Phones > 0 ? "active" : "inactive"}`}>
              {Phones > 0 ? "Active" : "Inactive"}
            </p>
          </div>
          <div className="dashboard-item ">
            <CircularProgressBar percentage={Computers}></CircularProgressBar>
            <p className="text-center d-flex gap-2 ">
              <LaptopOutlined />
              Computers ({Computers})
            </p>
            <p
              className={`commonstatus ${
                Computers > 0 ? "active" : "inactive"
              }`}
            >
              {Computers > 0 ? "Active" : "Inactive"}
            </p>
          </div>
          <div className="dashboard-item">
            <CircularProgressBar percentage={Cameras}></CircularProgressBar>
            <p className="text-center d-flex gap-2">
              <CameraOutlined />
              Cameras ({Cameras})
            </p>
            <p
              className={`commonstatus ${Cameras > 0 ? "active" : "inactive"}`}
            >
              {Cameras > 0 ? "Active" : "Inactive"}
            </p>
          </div>
          <div className="dashboard-item">
            <CircularProgressBar percentage={Accessories}></CircularProgressBar>
            <p className="text-center d-flex gap-2">
              <AppstoreAddOutlined />
              Accessories ({Accessories})
            </p>
            <p
              className={`commonstatus ${
                Accessories > 0 ? "active" : "inactive"
              }`}
            >
              {Accessories > 0 ? "Active" : "Inactive"}
            </p>
          </div>
          <div className="dashboard-item">
            <CircularProgressBar percentage={InEars}></CircularProgressBar>
            <p className="text-center d-flex gap-2">
              <CustomerServiceOutlined />
              In-Ears ({InEars})
            </p>
            <p className={`commonstatus ${InEars > 0 ? "active" : "inactive"}`}>
              {InEars > 0 ? "Active" : "Inactive"}
            </p>
          </div>
          <div className="dashboard-item ">
            <CircularProgressBar percentage={Others}></CircularProgressBar>
            <p className="text-center d-flex gap-2">
              <EllipsisOutlined />
              Others ({Others})
            </p>
            <p className={`commonstatus ${Others > 0 ? "active" : "inactive"}`}>
              {Others > 0 ? "Active" : "Inactive"}
            </p>
          </div>
        </div>
        <Row className="mt-5">
          <Col lg={6} className="d-flex justify-content-center">
            <img
              src="https://i.postimg.cc/DyfBpgy7/image.png"
              alt=""
              className="dashboard-image"
            />
          </Col>
          <Col lg={6} className="d-flex justify-content-center">
            <Calendar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DashBoard;
