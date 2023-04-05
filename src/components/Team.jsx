import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import varun from "../assets/images/svg/varun.svg";
import shubh from "../assets/images/svg/shubh.svg";
import Slider from "react-slick";
import creamdscrd from "../assets/images/svg/creamdscrd.svg";
import creamtwit from "../assets/images/svg/creamtwit.svg";
import creamm from "../assets/images/svg/creamm.svg";

const Team = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <section className="bg_black py-5 mt_m1 overflow-hidden">
      <Container className="pt-5">
        <h1 className="ff_lato_800 fs_4xl color_white mb-0 text-center">
          Meet the <span className="color_cream"> Team</span>
        </h1>
        <Row className="py-5 mx_531">
          <Slider {...settings}>
            {/* <Col lg={6}>
              <div className="d-flex bg_white align-items-center radius_24  flex-lg-row flex-column">
                <div>
                  <img className="w-100" src={varun} alt="varun" />
                </div>
                <div className="text-center ps-4">
                  <h1 className="ff_lato_700 fs_lg color_black">Varun Muthu</h1>
                  <p className="ff_lato_500 fs_sm color_black">
                    Marketing Director
                  </p>
                  <div className="text-center">
                    <a className="ff_lato_400 fs_xsm color_black" href="#">
                      https://www.linkedin.com/in/varunmuthu1
                    </a>
                  </div>
                </div>
              </div>
            </Col> */}
            <Col lg={6} className="">
              <div className="d-flex mx-3 bg_white align-items-center radius_24  flex-xl-row flex-column">
                <div>
                  <img className="w-100" src={shubh} alt="varun" />
                </div>
                <div className="text-center ps-4">
                  <h1 className="ff_lato_700 fs_lg color_black">
                    Shubh Sharma
                  </h1>
                  <p className="ff_lato_500 fs_sm color_black">
                    Operations Director
                  </p>
                  <div className="text-center pb-xl-0 pb-4  px-lg-0 px-2">
                    <a className="ff_lato_400 fs_xsm color_black" href="#">
                      https://www.linkedin.com/in/shubhsharma01/
                    </a>
                    <div className="d-flex justify-content-center mt-3">
                      <a href="#">
                        <img src={creamdscrd} alt="creamdscrd" />
                      </a>
                      <a href="#">
                        <img className="ms-2" src={creamtwit} alt="creamtwit" />
                      </a>
                      <a href="#">
                        {" "}
                        <img className="ms-2" src={creamm} alt="creamm" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className="">
              <div className="d-flex mx-3 bg_white align-items-center radius_24  flex-xl-row flex-column">
                <div>
                  <img className="w-100" src={varun} alt="varun" />
                </div>
                <div className="text-center ps-4">
                  <h1 className="ff_lato_700 fs_lg color_black">
                    Shubh Sharma
                  </h1>
                  <p className="ff_lato_500 fs_sm color_black">
                    Operations Director
                  </p>
                  <div className="text-center pb-xl-0 pb-4  px-lg-0 px-2">
                    <a className="ff_lato_400 fs_xsm color_black" href="#">
                      https://www.linkedin.com/in/shubhsharma01/
                    </a>
                    <div className="d-flex justify-content-center mt-3">
                      <a href="#">
                        <img src={creamdscrd} alt="creamdscrd" />
                      </a>
                      <a href="#">
                        <img className="ms-2" src={creamtwit} alt="creamtwit" />
                      </a>
                      <a href="#">
                        {" "}
                        <img className="ms-2" src={creamm} alt="creamm" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className="">
              <div className="d-flex mx-3 bg_white align-items-center radius_24  flex-xl-row flex-column">
                <div>
                  <img className="w-100" src={shubh} alt="varun" />
                </div>
                <div className="text-center ps-4">
                  <h1 className="ff_lato_700 fs_lg color_black">
                    Shubh Sharma
                  </h1>
                  <p className="ff_lato_500 fs_sm color_black">
                    Operations Director
                  </p>
                  <div className="text-center pb-xl-0 pb-4 px-lg-0 px-2">
                    <a className="ff_lato_400 fs_xsm color_black" href="#">
                      https://www.linkedin.com/in/shubhsharma01/
                    </a>
                    <div className="d-flex justify-content-center mt-3">
                      <a href="#">
                        <img src={creamdscrd} alt="creamdscrd" />
                      </a>
                      <a href="#">
                        <img className="ms-2" src={creamtwit} alt="creamtwit" />
                      </a>
                      <a href="#">
                        {" "}
                        <img className="ms-2" src={creamm} alt="creamm" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Slider>
        </Row>
      </Container>
    </section>
  );
};

export default Team;
