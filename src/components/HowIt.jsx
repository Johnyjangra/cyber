import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import yeloblue from "../assets/images/png/yelobluepara.png";

const HowIt = () => {
  return (
    <section className="bg_black pt-5 mt_m1 position-relative">
      <Container className="pt-5">
        <h1 className="ff_lato_800 fs_4xl color_white mb-0 text-center">
          How <span className="color_cream"> it works</span>
        </h1>
        <Row className="pt-5">
          <Col xl={3} sm={6}>
            <div className="grdnt_border_card text-center card_hovr px-xxl-4 px-2 h_100">
              <div className="">
                <div className="round_cream d-flex flex-column justify-content-center align-items-center m-auto mt-5">
                  <p className="ff_lato_700 fs_xl color_white mb-0 hvr_clr">
                    01
                  </p>
                </div>
              </div>
              <p className="ff_lato_700 fs_md color_white mt-4">Mint NFT</p>
              <p className="ff_lato_400  fs_xsm color_white mt-4 mb-5">
                You must own our NFT to connect to direct management or
                participate in governance
              </p>
            </div>
          </Col>
          <Col xl={3} sm={6} className="mt-sm-0 mt-4">
            <div className="grdnt_border_card text-center card_hovr px-xxl-4  h_100">
              <div className="">
                <div className="round_cream d-flex flex-column justify-content-center align-items-center m-auto mt-5">
                  <p className="ff_lato_700 fs_xl color_white mb-0 hvr_clr">
                    02
                  </p>
                </div>
              </div>
              <p className="ff_lato_700 fs_md color_white mt-4">
                Verify NFT OwnershipT
              </p>
              <p className="ff_lato_400  fs_xsm color_white mt-4 mb-5">
                Only Cyber Drops that are have verified are eligible to be
                connected under direct management
              </p>
            </div>
          </Col>
          <Col xl={3} sm={6} className="mt-xl-0 mt-4">
            <div className="grdnt_border_card text-center card_hovr px-xxl-4 px-2 h_100">
              <div className="">
                <div className="round_cream d-flex flex-column justify-content-center align-items-center m-auto mt-5">
                  <p className="ff_lato_700 fs_xl color_white mb-0 hvr_clr">
                    03
                  </p>
                </div>
              </div>
              <p className="ff_lato_700 fs_md color_white mt-4">
                Link API to your account
              </p>
              <p className="ff_lato_400  fs_xsm color_white mt-4 mb-5">
                Only HODLers that submit their API key and secret will be under
                direct management
              </p>
            </div>
          </Col>
          <Col xl={3} sm={6} className="mt-xl-0 mt-4">
            <div className="grdnt_border_card text-center card_hovr px-xxl-4 px-2 h_100">
              <div className="">
                <div className="round_cream d-flex flex-column justify-content-center align-items-center m-auto mt-5">
                  <p className="ff_lato_700 fs_xl color_white mb-0 hvr_clr">
                    04
                  </p>
                </div>
              </div>
              <p className="ff_lato_700 fs_md color_white mt-4">
                Passive Income for life
              </p>
              <p className="ff_lato_400  fs_xsm color_white mt-4 mb-5">
                As long as your HODL your Cyber Drop, you will be connected
                under direct management
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="position-absolute d-lg-block d-none btm_m52 l_6">
        <img src={yeloblue} alt="firstpara" />
      </div>
    </section>
  );
};

export default HowIt;
