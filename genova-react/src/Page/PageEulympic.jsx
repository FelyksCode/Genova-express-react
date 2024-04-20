import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import ImageEulympic from "../Component/Eulympic/ImageEulympic";
import Main from "../Component/Eulympic/Main/Eulympic";
import Esports from "../Component/Eulympic/Esports/Esports";

import { Fade } from "react-reveal";

function PageEulympic() {
  return (
    <>
      <div>
        <Navbar />

        <section className="snap-y overflow-hidden focus:scroll-auto">
          <Fade duration={100}>
            <ImageEulympic />
          </Fade>
        </section>

        <section className="snap-y snap-mandatory overflow-hidden bg">
          <Fade>
            <div
              style={{
                background:
                  '#a1a5ca',
              }}
            >
              <Main />
              <Esports />
            </div>
          </Fade>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default PageEulympic;
