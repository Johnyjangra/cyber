import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/images/png/logo.png";
import boat from "../assets/images/svg/boat.svg";
import discord from "../assets/images/svg/discord.svg";
import twit from "../assets/images/svg/twit.svg";
import mpic from "../assets/images/svg/mpic.svg";
import search from "../assets/images/png/search.png";

const Nav = () => {
  const [first, setfirst] = useState(true);
  const [icons, seticons] = useState(true);
  return (
    <section>
      <nav className="bg_black py-3">
        <Container>
          <div className="d-flex justify-content-between">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="d-flex align-items-center">
              <ul
                className={
                  first
                    ? "hide d-flex mb-0 ps-0 mobile_ul"
                    : "show d-flex mb-0 ps-0 mobile_ul"
                }
              >
                <li>
                  <a
                    className="ff_lato_400 fs_xsm color_white font_hovr"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="ms-lg-4 mt_xsm_4">
                  <a
                    className="ff_lato_400 fs_xsm color_white font_hovr"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li className="ms-lg-4 mt_xsm_4">
                  <a
                    className="ff_lato_400 fs_xsm color_white font_hovr"
                    href="#"
                  >
                    Team
                  </a>
                </li>
                <li className="ms-lg-4 mt_xsm_4">
                  <a
                    className="ff_lato_400 fs_xsm color_white font_hovr"
                    href="#"
                  >
                    Roadmap
                  </a>
                </li>
                <li className="ms-lg-4 mt_xsm_4">
                  <a
                    className="ff_lato_400 fs_xsm color_white font_hovr"
                    href="#"
                  >
                    Partners
                  </a>
                </li>
                <div
                  className=" position-absolute top_8 right_7 d-lg-none d-block"
                  onClick={() => {
                    setfirst(true);
                  }}
                >
                  <div className="cros1"></div>
                  <div className="cros2"></div>
                </div>
              </ul>
              <a
                href="#"
                className="d-md-none d-block ff_lato_400 fs_xsm color_white font_hovr"
                onClick={() => {
                  seticons(false);
                }}
              >
                {/* <img src={search} alt="search" /> */}
                See More.....
              </a>
              <div
                className={
                  icons
                    ? "right_m5 d-flex align-items-center ms-md-4 icons_app"
                    : "right_0 d-flex align-items-center ms-md-4 icons_app"
                }
              >
                <a
                  href="#"
                  className="round1 d-flex flex-column justify-content-center align-items-center shadow mt-md-0 mt-3"
                >
                  <span className="anchor"></span>
                  <img
                    className="filter position-absolute z-1"
                    src={boat}
                    alt="boat"
                  />
                </a>

                <a
                  href="#"
                  className="round1 d-flex flex-column justify-content-center align-items-center shadow ms-md-2 mt-md-0 mt-3"
                >
                  <span className="anchor"></span>
                  <img
                    className="filter position-absolute z-1"
                    src={discord}
                    alt="discord"
                  />
                </a>
                <a
                  href="#"
                  className="round1 d-flex flex-column justify-content-center align-items-center shadow ms-md-2 mt-md-0 mt-3"
                >
                  <span className="anchor"></span>
                  <img
                    className="filter position-absolute z-1"
                    src={twit}
                    alt="discord"
                  />
                </a>
                <a
                  href="#"
                  className="round1 d-flex flex-column justify-content-center align-items-center shadow ms-md-2 mt-md-0 mt-3"
                >
                  <span className="anchor"></span>
                  <img
                    className="filter position-absolute z-1"
                    src={mpic}
                    alt="discord"
                  />
                </a>
                <a
                  href="#"
                  onClick={() => {
                    seticons(true);
                  }}
                  className="d-md-none d-block ff_lato_400 fs_xsm color_white mt-3"
                >
                  Back : &gt;
                </a>
              </div>
              <button className="ff_lato_600 fs_md color_white bg_cream py-2 px-3 ms-4 d-sm-block d-none">
                Connect Wallet
              </button>
              <div
                className="ms-4 d-lg-none d-block"
                onClick={() => {
                  setfirst(false);
                }}
              >
                <div className="icon1"></div>
                <div className="icon2"></div>
                <div className="icon3"></div>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </section>
  );
};

export default Nav;
