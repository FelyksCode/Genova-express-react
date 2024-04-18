import "./footerStyle.css";
import Sparkle from "../Animation/Sparkle";
import Logo from "../../Assets/Images/UfestLogo.webp";
import Bem from "../../Assets/Images/BemLogo.webp";

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
                  <div className="flex justify-center">
                    <a className="mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a className="mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                    </a>
                    <a className="mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    </a>
                  </div>
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
              <div className="flex justify-center">
                <a className="mx-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a className="mx-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a className="mx-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
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
