import React from "react";
import { Container } from "react-bootstrap";

const RoadMap = () => {
  return (
    <section className="bg_black position-relative">
      <Container>
        <h1 className="ff_lato_800 fs_4xl color_white mb-0 text-center">
          Road <span className="color_cream"> Map</span>
        </h1>
        <div className="timeline_container pt-5">
          <div>
            <div className="contant ms-sm-auto ps-5 befor_img mx_100">
              <div className="left_line">
                <h1 className="ff_lato_400 fs_lg color_white">March 2022</h1>
                <p className="ff_lato_400 fs_xsm color_white">
                  1000 Drops Launch on Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5">
            <div className="contant mt-5 pe-5 after_img1 mx_100">
              <div className="text-sm-end right_line txt_media_start">
                <h1 className="ff_lato_400 fs_lg color_white">March 2022</h1>
                <p className="ff_lato_400 fs_xsm color_white">
                  1000 Drops Launch on Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5">
            <div className="contant ms-sm-auto mt-5  ps-5 befor_img2 mx_100">
              <div className="left_line">
                <h1 className="ff_lato_400 fs_lg color_white">March 2022</h1>
                <p className="ff_lato_400 fs_xsm color_white">
                  Creation of Treasury
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5">
            <div className="contant mt-5  pe-5 after_img2 mx_100">
              <div className="text-sm-end right_line  txt_media_start">
                <h1 className="ff_lato_400 fs_lg color_white">April 2022</h1>
                <p className="ff_lato_400 fs_xsm color_white">
                  Our First Airdrop
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5">
            <div className="contant ms-sm-auto mt-5  ps-5 befor_img mx_100">
              <div className="left_line">
                <h1 className="ff_lato_400 fs_lg color_white">June 2022</h1>
                <p className="ff_lato_400 fs_xsm color_white">Major Collabs</p>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5">
            <div className="contant mt-5  pe-5 after_img3 mx_100">
              <div className="text-sm-end right_line txt_media_start">
                <h1 className="ff_lato_400 fs_lg color_white">
                  Sometime in Q3
                </h1>
                <p className="ff_lato_400 fs_xsm color_white">
                  Cyber Celebs come on Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5">
            <div className="contant ms-sm-auto mt-5  ps-5 befor_img mx_100">
              <div className="left_line">
                <h1 className="ff_lato_400 fs_lg color_white">
                  Sometime in Q3
                </h1>
                <p className="ff_lato_400 fs_xsm color_white">
                  Streetwear + Merch
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5">
            <div className="contant mt-5  pe-5 after_img3 mx_100">
              <div className="text-sm-end right_line txt_media_start">
                <h1 className="ff_lato_400 fs_lg color_white">
                  Sometime in Q4
                </h1>
                <p className="ff_lato_400 fs_xsm color_white mb-0">
                  Enhanced Partnerships
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RoadMap;
