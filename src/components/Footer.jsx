import React from "react";
import { Container } from "react-bootstrap";
import footpara from "../assets/images/svg/footpara.svg";
import boat from "../assets/images/svg/boat.svg";
import discord from "../assets/images/svg/discord.svg";
import twit from "../assets/images/svg/twit.svg";
import mpic from "../assets/images/svg/mpic.svg";

const Footer = () => {
  return (
    <section className="bg_black pt-5 mt_m1">
      <Container className="pt-5 pt-md-5">
        <div className="text-center">
          <img src={footpara} alt="footpara" />
        </div>
        <h1 className="ff_lato_600 fs_xxl color_cream text-center">
          Cyber Drops
        </h1>
        <div className="d-flex align-items-center pt-4 justify-content-center">
          <a
            href="#"
            className="round1 d-flex flex-column justify-content-center align-items-center shadow  ms-2"
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
            className="round1 d-flex flex-column justify-content-center align-items-center shadow ms-2"
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
            className="round1 d-flex flex-column justify-content-center align-items-center shadow ms-2"
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
            className="round1 d-flex flex-column justify-content-center align-items-center shadow ms-2"
          >
            <span className="anchor"></span>
            <img
              className="filter position-absolute z-1"
              src={mpic}
              alt="discord"
            />
          </a>
        </div>
      </Container>
      <div className="bordr mt-4"></div>
      <p className="mb-0 ff_lato_400 fs_xsm color_gray text-center py-4">
        Copyright By 2022
      </p>
    </section>
  );
};

export default Footer;
