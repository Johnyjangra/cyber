import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import OurMission from "./components/OurMission";
import Partner from "./components/Partner";
import OurAlgo from "./components/OurAlgo";

import WhatDo from "./components/WhatDo";
import Team from "./components/Team";
import HowIt from "./components/HowIt";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordian from "../src/components/Accordian";
import Footer from "./components/Footer";
import RoadMap from "./components/RoadMap";

function App() {
  return (
    <>
      {/* <Nav /> */}
      <Hero />
      <OurMission />
      <Partner />
      <OurAlgo />

      <WhatDo />
      <HowIt />
      <Team />
      <RoadMap />
      <Accordian />
      <Footer />
    </>
  );
}

export default App;
