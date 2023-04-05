import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mountain from "../assets/images/png/mountain.png";
import bit from "../assets/images/png/bit.png";
import army from "../assets/images/png/army.png";

const OurAlgo = () => {
  return (
    <section className="bg_black py-5 mt_m1">
      <Container>
        <Row className="align-items-center flex-lg-row flex-column-reverse">
          <Col lg={6} className="mt-lg-0 mt-4">
            <div className="text-lg-start text-center">
              <h1 className="ff_lato_800 fs_4xl color_white pe-lg-5">
                Our <span className="color_cream"> Algo</span>
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
          <Col lg={6} className="mt-lg-0 mt-5">
            <div className="d-flex align-items-center justify-content-center flex-md-row flex-column">
              <div className="d-flex flex-md-column flex-row">
                <div className="img_border p-2">
                  <img className="w-100" src={mountain} alt="mountain" />
                </div>
                <div className="img_border p-2 mt-md-4 ms-md-0 ms-4">
                  <img className="w-100" src={army} alt="army" />
                </div>
              </div>
              <div className="img_border p-2 ms-md-4 mt-md-0 mt-4">
                <img className="w-100" src={bit} alt="army" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurAlgo;
