import "./footerStyle.css";
import Sparkle from "../Animation/Sparkle";
import Logo from "../../Assets/Images/UfestLogo.webp";
import Bem from "../../Assets/Images/BemLogo.webp";
import Socmed from "./Socmed/Socmed";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="flex footer px-10 bg-neutral text-neutral-content justify-between pt-5"
    >
      <div className="flex w-full flex-col justify-evenly items-center py-10 lg:py-20">
        <div className="flex items-center center justify-evenly w-full">
          <div className="w-36 flex justify-center">
            <Sparkle>
              <img className="h-32 footer-img " src={Logo} alt="logo" />
            </Sparkle>
          </div>
          <div className="w-72 lg:hidden">
            <div className="border-b border-gray-300 w-full"></div>
          </div>
          <div className="hidden lg:flex flex-col justify-center items-center">
            <div className="hidden lg:block">
              <Sparkle>
                <div className="flex flex-col justify-center items-center my-5 lg:my-8">
                  <Socmed />
                </div>
              </Sparkle>
            </div>
            <Sparkle>
              <p style={{ color: "White" }} className="text-center">
                Universitas Multimedia Nusantara
                <br />
                Jl. Scientia Boulevard, Gading Serpong
                <br />
                Tangerang, Banten 15811, Indonesia
              </p>
            </Sparkle>
          </div>
          <div className="w-36 flex justify-center">
            <Sparkle>
              <img className="h-32 footer-img " src={Bem} alt="logo" />
            </Sparkle>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <Sparkle>
            <p style={{ color: "White" }} className="text-center lg:hidden">
              Universitas Multimedia Nusantara
              <br />
              Jl. Scientia Boulevard, Gading Serpong
              <br />
              Tangerang, Banten 15811, Indonesia
            </p>
          </Sparkle>
          <Sparkle>
            <div className="flex flex-col justify-center items-center my-10 lg:hidden">
              <Socmed />
            </div>
          </Sparkle>
        </div>
      </div>

      <div className="Footer-Foot flex justify-center self-center">
        <p className="text-center footer-text tracking-wide">
          © UMN FESTIVAL 2024 By{" "}
          <Sparkle>
            <strong> Genova </strong>
          </Sparkle>
        </p>
      </div>
    </footer>
  );
}
