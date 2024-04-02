import img from "../../../Assets/Rangkaian/Ucare.png";
import "./Logo.css";

function Logo(){
    return(
        <div className="bungkus flex justify-center">
            <div className="bungkus2 flex justify-between">
                <div className="content-center kotaklogo">
                    <img className="logo" src={img} alt="Logo Ucare" />
                </div>
                <div className="content-center w-3/5">
                    <h1 style={{ fontFamily: 'Akbaal, sans-serif' }} className="judullogoucare text-4xl font-bold mb-5">Logo</h1>
                    <p style={{ fontFamily: 'Forum-Regular, sans-serif' }} className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    );
}

export default Logo;
//npm install react-slick --save & npm install slick-carousel --save