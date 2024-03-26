import React from "react";
import logo from "../../Assets/Images/UfestLogo.png";

function Footer() {
    return (
        <div className="static bottom-0">
            <footer className="footer p-10 bg-base-200 text-base-content ">
                <div>
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="hidden lg:block py-3">
                            <div className="text-4xl font-bold mb-5">Alamat</div>
                            <div className="text-md w-80">Universitas Multimedia Nusantara Jl. Scientia Boulevard, Gading Serpong, Tangerang Banten 15811, Indonesia.</div>
                        </div>
                        <div className="py-3 ps-3 ">
                            <img src={logo} className=" w-64" alt="Logo" />
                            <div className="text-center hidden lg:block">
                                <div>&#9400; UMN Festival 2024</div>
                                <div>By Genova</div>
                            </div>
                        </div>
                        <div className="py-3 text-center">
                            <div className="text-4xl ps-3 font-bold text-center lg:text-left">Kontak</div>
                            <div className="flex justify-center lg:block px-3">
                                <div className="p-3 lg:p-0">
                                    <div className="text-md my-3 lg:text-left">Email <a href="#" className="block lg:inline-block">ufest@umn.ac.id</a>
                                    </div>
                                    <div>
                                        <div className="text-md my-3 lg:text-left">Line <a href="#" className="block lg:inline-block">@1234ufest</a></div>
                                    </div>
                                </div>
                                <div className="p-3 lg:p-0">
                                    <div className="text-md my-3 lg:text-left">Instagram <a href="https://www.instagram.com/umnfestival/" target="_blank" className="block lg:inline-block">@umnfestival</a>
                                    </div>
                                    <div className="text-md lg:text-left">Facebook <a href="#" className="block lg:inline-block">umnfestival</a></div>
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
