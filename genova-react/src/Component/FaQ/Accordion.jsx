import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope as regularEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLine,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import "./stylefaq.css";

function FaqAccordion() {
  return (
    <div>
      <div className=" w-auto h-[100vh] mx-auto py-[100px] bg-vintage faqwrapper">
        <div className="overlayfaq"></div>
        <Accordion className="md:w-[800px] w-[400px] mx-auto my-[200px] py-[40px] px-[40px] bg-white/70 rounded-xl">
          <AccordionPanel>
            <AccordionTitle className="text-xl my-2 text-black dark:text-black left-0">
              Apa itu UMN Festival?
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-800 dark:text-gray-800 textfaq rounded-md p-2">
                UMN Festival merupakan festival tahunan terbesar di Universitas
                Multimedia Nusantara sebagai bentuk perayaan ulang tahun UMN.
                Ruang lingkup UMN Festival tak hanya meliputi perayaan,
                melainkan terdapat pula 5 rangkaian utama yang berada di dalam
                UMN Festival 2024 yaitu: 'UNVEILING, E-ULYMPIC, U-CARE, ULYMPIC,
                DAN UNIFY'
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className="text-xl my-2 text-black dark:text-black left-0">
              Kapan jadwal UMN Festival?
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-800 dark:text-gray-800 textfaq rounded-md p-2">
                UMN Festival dimulai dari bulan April 2024 sampai bulan November
                2024
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className="text-xl my-2 text-black dark:text-black">
              Dimana UMN Festival?
            </AccordionTitle>
            <AccordionContent>
              <p>
                Alamat:
                <br /> Universitas Multimedia Nusantara Jl. Scientia Boulevard,
                Gading Serpong, Tangerang Banten 15811, Indonesia.
              </p>
              <p className="mb-2 text-gray-800 dark:text-gray-800 textfaq">
                Social Media:
              </p>
              <ul className="list-disc pl-5 text-gray-800 ">
                <li>
                  <FontAwesomeIcon icon={regularEnvelope} className="lg:me-2" />
                  <a
                    href="mailto:umnfestival@umn.ac.id"
                    className="block lg:inline-block"
                    target="_blank"
                  >
                    umnfestival@umn.ac.id
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faLine} className="lg:me-2" />
                  <div className="block lg:inline-block">@877tuixh</div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faInstagram} className="lg:me-2" />
                  <a
                    href="https://www.instagram.com/umnfestival/"
                    target="_blank"
                    className="block lg:inline-block"
                  >
                    @umnfestival
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faTiktok} className="lg:me-2" />
                  <a href="#" className="block lg:inline-block">
                    @umnfestival
                  </a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </div>
  );
}

export default FaqAccordion;
