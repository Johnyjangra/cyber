import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import clrpara from "../assets/images/png/clrpara.png";
import clrpic from "../assets/images/png/clrpic.png";

const OurMission = () => {
  return (
    <section className="bg_black py-lg-5 position-relative mt_m1">
      <div className="blur position-absolute top_0 l_0"></div>
      <div className="blur position-absolute r_0"></div>
      <Container>
        <Row className="align-items-center py-5">
          <Col lg={6} className="overflow-hidden">
            <div className="position-relative text-lg-start text-center">
              <img
                className="position-relative z_2 w_xsm_100 rotate_xsm_4"
                src={clrpara}
                alt="clrpara"
              />
              <div className="position-absolute top-0 z-1 l_lg_20 l_md_10 d-sm-block d-none ">
                <img className="w_xsm_100" src={clrpic} alt="clrpic" />
              </div>
            </div>
          </Col>
          <Col lg={6} className="mt-lg-0 mt-4">
            <div className="text-lg-start text-center">
              <h1 className="ff_lato_800 fs_4xl color_white pe-lg-5">
                Our <span className="color_cream"> Mission</span>
              </h1>
              <p className="ff_lato_400 fs_sm color_white pt-lg-4 pt-3">
                We understand that one of the biggest concerns for early-stage
                investors is that it can quickly become stressful, overwhelming,
                and especially extremely time consuming. It isn’t easy to
                balance a full time job, family, and an active investment
                portfolio, especially when just starting out.
              </p>
              <button className="ff_lato_600 fs_md color_white bg_cream py-2 px-3 mt-5">
                Read More
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurMission;
