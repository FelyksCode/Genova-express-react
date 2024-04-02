import React from 'react';
import "./Ulympic.css";
import img1 from "../../Assets/Rangkaian/Ulympic.png";
import img2 from "../../Assets/Images/UfestLogo.png";

function UlympicLogo() {
    
  return (
    <div className=" mx-auto flex flex-col xl:flex-row md:flex-row items-center h-screen w-full overflow-hidden">
        <div className="kartu">
            <div className="kartu-inner">
                <div className="kartu-front flex justify-center items-center">
                    <img src={img1} alt="Logo" className="logo-image" />
                </div>
                <div className="kartu-back flex justify-center items-center">
                    <img src={img2} alt="Logo" className="logo-image1" />
                </div>
            </div>
        </div>
        <div className="descUlympic h-500 rounded-lg shadow-lg">
            <p className='fontt p-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin nec ex ac diam porttitor lacinia. Nullam quis neque at sapien lobortis posuere. 
                Mauris vel sapien id justo interdum lobortis. Duis ut tellus libero. Sed vehicula est et odio feugiat, 
                vitae faucibus neque commodo. Aliquam sit amet nulla vitae sem luctus ultricies. Integer nec feugiat enim, 
                non convallis neque. Donec at tellus eget eros ultricies faucibus. Sed ut turpis nec lectus tempor vestibulum vitae vitae ligula.
            </p>
        </div>
    </div>
        
  );
}

export default UlympicLogo;
