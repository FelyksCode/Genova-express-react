import React from "react";
import logo from "../../Assets/Images/UfestLogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope as regularEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLine,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div className="static bottom-0" style={{ background: "rgb(72,75,117)" }}>
      <footer className="footer p-10 bg-base-200 text-base-content ">
        <div>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="hidden lg:block py-3 w-64 text-white">
              <div className="text-4xl font-bold mb-5 ">Alamat</div>
              <div className="text-md w-80">
                Universitas Multimedia Nusantara Jl. Scientia Boulevard, Gading
                Serpong, Tangerang Banten 15811, Indonesia.
              </div>
            </div>
            <div className="py-3 mx-auto w-64 text-white">
              <img src={logo} className=" w-40 mx-auto" alt="Logo" />
              <div className="text-center hidden lg:block">
                <div>&#9400; UMN Festival 2024</div>
                <div>By Genova</div>
              </div>
            </div>
            <div className="py-3 text-center w-64 text-white">
              <div className="text-4xl ps-3 font-bold text-center lg:text-left">
                Kontak
              </div>
              <div className="flex justify-center lg:block px-3">
                <div className="p-3 lg:p-0">
                  <div className="text-md my-3 lg:text-left">
                    <FontAwesomeIcon
                      icon={regularEnvelope}
                      className="lg:me-2"
                    />
                    <a
                      href="mailto:umnfestival@umn.ac.id"
                      className="block lg:inline-block"
                      target="_blank"
                    >
                      umnfestival@umn.ac.id
                    </a>
                  </div>
                  <div>
                    <div className="text-md my-3 lg:text-left">
                      <FontAwesomeIcon icon={faLine} className="lg:me-2" />
                      <div className="block lg:inline-block">@877tuixh</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 lg:p-0">
                  <div className="text-md my-3 lg:text-left">
                    <FontAwesomeIcon icon={faInstagram} className="lg:me-2" />
                    <a
                      href="https://www.instagram.com/umnfestival/"
                      target="_blank"
                      className="block lg:inline-block"
                    >
                      @umnfestival
                    </a>
                  </div>
                  <div className="text-md my-3 lg:text-left">
                    <FontAwesomeIcon icon={faTiktok} className="lg:me-2" />
                    <a href="#" className="block lg:inline-block">
                      @umnfestival
                    </a>
                  </div>
                  <div className="text-md lg:text-left">
                    <FontAwesomeIcon icon={faLink} className="lg:me-2" />
                    <a
                      href="linktr.ee/umnfestival2024"
                      className="block lg:inline-block"
                    >
                      umnfestival2024
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center block lg:hidden">
              <div>&#9400; UMN Festival 2024</div>
              <div>By Genova</div>
            </div>
          </div>
        </div>
      </footer>{" "}
    </div>
  );
}

export default Footer;
