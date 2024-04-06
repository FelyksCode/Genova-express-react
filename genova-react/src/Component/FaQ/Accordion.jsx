import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

import "./stylefaq.css";

function FaqAccordion() {
  return (
    <div>
      <div className=" w-auto h-[100vh] mx-auto py-[100px] bg-vintage faqwrapper">
        <div className="overlayfaq"></div>
        <Accordion className="md:w-[800px] w-[400px] mx-auto my-[200px] py-[40px] px-[40px] bg-white/70 rounded-xl">
          <AccordionPanel>
            <AccordionTitle className="text-xl my-2">
              What is UMN Festival
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-black dark:text-gray-600 rounded-md p-2">
                UMN Festival merupakan festival tahunan terbesar di Universitas
                Multimedia Nusantara sebagai bentuk perayaan ulang tahun UMN.
                Ruang lingkup UMN Festival tak hanya meliputi perayaan,
                melainkan terdapat pula 5 rangkaian utama yang berada di dalam
                UMN Festival 2024 yaitu: 'UNVEILING, E-ULYMPIC, U-CARE, ULYMPIC,
                DAN UNIFY'
              </p>
              {/* <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to&nbsp;
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  get started&nbsp;
                </a>
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p> */}
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className="text-xl my-2">
              Is there a Figma file available?
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the
                <a
                  href="https://flowbite.com/figma/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Figma design system
                </a>
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle className="text-xl my-2">
              What are the differences between Flowbite and Tailwind UI?
            </AccordionTitle>
            <AccordionContent>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Learn more about these technologies:
              </p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <a
                    href="https://flowbite.com/pro/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Tailwind UI
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
