import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import paracute from "../assets/images/png/paracute.png";
import Nav from "./Nav";

const Hero = () => {
  return (
    <section className="bg_black ">
      <div className="blur position-absolute top_0 l_0"></div>
      <Nav />
      <Container>
        <Row className="flex-lg-row flex-column-reverse align-items-center py-5">
          <Col lg={6}>
            <div className="text-lg-start text-center">
              <h1 className="ff_lato_800 fs_4xl color_white pe-lg-5">
                Welcome to <span className="color_cream">Cyber Drops</span>
              </h1>
              <p className="ff_lato_400 fs_sm color_white pt-lg-4 pt-3">
                Viverra felis, dui adipiscing ipsum pharetra donec. Pretium,
                tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit
                nec curabitur purus. Ullamcorper mattis risus suspendisse
                pretium tristique.
              </p>
              <button className="ff_lato_600 fs_md color_white bg_cream py-2 px-3 mt-5">
                Explore Now
              </button>
            </div>
          </Col>
          <Col lg={6} className="text-center">
            <div>
              <img className="w_xsm_100 " src={paracute} alt="paracute" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
