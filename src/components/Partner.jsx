import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import playbit from "../assets/images/png/playbit.png";
import pic24 from "../assets/images/png/pic24.png";
import rock from "../assets/images/png/rock.png";
import circle from "../assets/images/png/circle3.png";

const Partner = () => {
  return (
    <section className="bg_black mt_m1">
      <div className="bg_black py-lg-5">
        <h1 className="ff_lato_800 fs_4xl color_white pe-lg-5 text-center">
          part<span className="color_cream">ners</span>
        </h1>
        <div className="bg_img py-lg-5">
          <div className="py-lg-5">
            <Container className="py-lg-5 my-lg-5">
              <Row className="pt-5 align-items-center">
                <Col xl={4}>
                  <div className="grdnt_border py-4 px-4 text-center">
                    <img
                      className="my-2  w_sm_100"
                      src={playbit}
                      alt="playbit"
                    />
                  </div>
                  <p className="ff_lato_700 fs_sm color_black text-center mt-3 clr_lg_white">
                    Playbit
                  </p>
                </Col>
                <Col xl={8} className="mt-xl-0 mt-4">
                  <Row>
                    <Col xl={4} md={6}>
                      <div className="grdnt_border text-center">
                        <img src={pic24} alt="pic24" />
                      </div>
                      <p className="ff_lato_700 fs_sm color_black text-center mt-3 clr_lg_white">
                        24 Capital
                      </p>
                    </Col>
                    <Col xl={4} md={6} className="mt-md-0 mt-4">
                      <div className="grdnt_border text-center">
                        <img src={rock} alt="rock" />
                      </div>
                      <p className="ff_lato_700 fs_sm color_black text-center mt-3 clr_lg_white">
                        TradingHive
                      </p>
                    </Col>

                    <Col xl={4} md={6} className="mt-xl-0 mt-4 mx-xl-0 mx-auto">
                      <div className="grdnt_border text-center">
                        <img src={circle} alt="circle" />
                      </div>
                      <p className="ff_lato_700 fs_sm color_black text-center mt-3 clr_lg_white">
                        Focus Group Equities
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <p className="ff_lato_800 fs_sm color_cream mb-0 trnsfm_top text-center">
        For business and collaborations, contact us team@cyberdrops.finance
      </p>
    </section>
  );
};

export default Partner;
