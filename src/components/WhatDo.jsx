import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import para1 from "../assets/images/png/para1.png";
import para2 from "../assets/images/png/para2.png";
import para3 from "../assets/images/png/para3.png";
import para4 from "../assets/images/png/para4.png";
import firstpara from "../assets/images/svg/firstpara.png";

const WhatDo = () => {
  return (
    <section className="py-lg-5 bg_black mt_m1 position-relative">
      <Container className="pt-5">
        <Row className="justify-content-between">
          <Col lg={5}>
            <div>
              <Row>
                <Col lg={6} xs={6}>
                  <div className="">
                    <img className="w-100" src={para1} alt="para1" />
                  </div>
                </Col>
                <Col lg={6} xs={6}>
                  <div className="">
                    <img className="w-100" src={para2} alt="para2" />
                  </div>
                </Col>
              </Row>
              <Row className="transform_x_112 mt-lg-0 mt-4">
                <Col lg={6} xs={6} className=" text-end">
                  <div className="">
                    <img className="w-100" src={para3} alt="para2" />
                  </div>
                </Col>
                <Col lg={6} xs={6} className=" text-end">
                  <div className="">
                    <img className="w-100" src={para4} alt="para2" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6} xl={5} className="mt-lg-0 mt-4">
            <div className="text-lg-start text-center max_463 ms-auto">
              <h1 className="ff_lato_800 fs_4xl color_white pe-lg-5">
                What <span className="color_cream"> we do</span>
              </h1>
              <p className="ff_lato_400 fs_sm color_white pt-lg-4 pt-3">
                1000 Cyber Drops will be dropping on Ethereum in March 2022.
                Each and every Cyber Drop is uniquely hand crafted. This is just
                the beginning of our journey. Owning a Cyber Drop will unlock
                monthly airdrops and future governance rights in addition to our
                revolutionary algorithm. We strive to always bring innovation
                and keep BUILDing. Cyber Drops is a community driven project and
                always will be that way. That’s our promise.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="position-absolute right_5 bottom_2 bottom_m40 bottom_m52 d-lg-block d-none z_1">
        <img src={firstpara} alt="firstpara" />
      </div>
    </section>
  );
};

export default WhatDo;
