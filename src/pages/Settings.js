import React from "react";
import "./Settings.css";
import { Row, Col } from "react-bootstrap";

function Settings() {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4"> Settings</h2>
      <div className="top-sec">
        <Row>
          <Col
            lg={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div className="border p-4 d-flex flex-wrap gap-4 rounded justify-content-center">
              <div className="admin-pic ">
                <img src="https://i.postimg.cc/Gmd5NPVB/3135715.png" alt="" />
              </div>
              <div className="text-center">
                <b>CartCraze</b>
                <p style={{ fontSize: "12px" }} className="m-0">
                  Admin <br />
                  admin@cartcraze.in <br />
                  New Delhi
                </p>
              </div>
              <div className="edit-icon">
                <img
                  src="https://i.postimg.cc/v85BdGjk/download-removebg-preview-1.png"
                  alt=""
                />
                <p>Edit</p>
              </div>
            </div>
            <div className=" d-flex justify-content-around mt-3 w-100 flex-wrap gap-3 mb-3">
              <div className="site-settings p-2 px-5 border rounded d-flex flex-column align-items-center">
                <img
                  src="https://i.postimg.cc/x8GjndF5/download-removebg-preview.png"
                  alt=""
                />
                <p className="text-center m-0 mt-2">
                  Site <br />
                  Settings
                </p>
              </div>
              <div className="site-settings p-2 px-5 border rounded d-flex flex-column align-items-center">
                <img
                  src="https://i.postimg.cc/pTs48h1y/download-removebg-preview-2.png"
                  alt=""
                />
                <p className="text-center  m-0 mt-2">
                  General <br />
                  Settings
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} className="d-flex justify-content-center">
            <div className="border p-4 rounded">
              <div className="notification">
                <b>Notifications</b> <p className="count">2</p>
              </div>
              <div>
                <div className="d-flex mt-3 ">
                  <img
                    src="https://i.postimg.cc/3rq2q2fK/download.png"
                    alt=""
                    className="user-icon me-3 mt-1"
                  />

                  <p>
                    <b>John</b> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing el...
                  </p>
                </div>
                <hr />
                <div className="d-flex ">
                  <img
                    src="https://i.postimg.cc/3rq2q2fK/download.png"
                    alt=""
                    className="user-icon me-3 mt-1"
                  />

                  <p>
                    <b>Devis</b> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing el...
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Settings;
