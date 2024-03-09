import React from "react";
import Accordion from "../Component/FaQ/Accordion";
import Navbar from "../Component/Navbar/Navbar";

import { Fade } from "react-reveal";

function Faqpage() {
  return (
    <div>
      <Navbar />
      <section className="scroll-smooth">
        <Fade>
          <Accordion />
        </Fade>
      </section>
    </div>
  );
}

export default Faqpage;
