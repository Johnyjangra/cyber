import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import yeloblue from "../assets/images/png/yelobluepara.png";

function BasicExample() {
  return (
    <section className="bg_black pb-5 mt_m1 position-relative">
      <Container>
        <h1 className="ff_lato_800 fs_4xl  color_cream text-center pt-4 pb-5">
          FAQ<span className="color_white">'s</span>
        </h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" className="py-3">
            <Accordion.Header className="ff_lato_500 fs_md color_white">
              Egestas scelerisque duis quis aliquet. Consectetur?
            </Accordion.Header>
            <Accordion.Body>
              Viverra metus viverra rhoncus eget quam suspendisse diam amet,
              nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
              egestas feugiat amet. Ut nibh vulputate.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mt-4 py-3">
            <Accordion.Header>
              Ac nec enim amet, leo lorem quis neque vitae aliquet?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mt-4 py-3">
            <Accordion.Header className="ff_lato_500 fs_md color_white pe-2">
              Sit laoreet nibh sit hac potenti. Non ullamcorper fames nibh
              donec?
            </Accordion.Header>
            <Accordion.Body>
              Viverra metus viverra rhoncus eget quam suspendisse diam amet,
              nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
              egestas feugiat amet. Ut nibh vulputate.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mt-4 py-3 pe-2">
            <Accordion.Header>
              Porta amet tortor nec pulvinar urna. Et blandit sit id?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="mt-4 py-3 pe-2">
            <Accordion.Header>
              Porta amet tortor nec pulvinar urna. Et blandit sit id?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <div className="position-absolute d-xxxl-block d-none btm_m49 l-0 ">
        <img className="w_90" src={yeloblue} alt="firstpara" />
      </div>
    </section>
  );
}

export default BasicExample;
