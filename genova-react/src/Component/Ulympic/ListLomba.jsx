import { React, useState } from 'react';
import "./Ulympic.css";
import img1 from "../../Assets/Images/badminton.jpeg"
import img2 from "../../Assets/Images/Basket.jpg"
import img3 from "../../Assets/Images/Futsal.jpg"
import img4 from "../../Assets/Images/Voli.jpg"


function ListLomba(){
    const [active, setActive] = useState(0);

  const Lomba = [
    {
      name: "Badminton",
      description: `tes`,
      backgroundUrl: img1
    },
    {
      name: "Basket",
      description: `tes`,
      backgroundUrl: img2
    },
    {
      name: "Futsal",
      description: `tes`,
      backgroundUrl: img3
    },
    {
      name: "Voli",
      description: `tes`,
      backgroundUrl: img4
    }
  ]
    return(
<div className="listlomba text-white">
    <h1 className='text-center text-6xl'>Pilih Lomba</h1>
      <ul>
        {Lomba.map((Lomba, i) => (
          <li
            key={i}
            style={{ backgroundImage: `url(${Lomba.backgroundUrl})` }}
            role="button"
            className={active === i ? "active" : ""}
            onMouseEnter={() => setActive(i)}
          >
            
            <h3>{Lomba.name}</h3>
            <div className="section-content">
              <div className="inner">
                <div className="bio">
                  <h2>{Lomba.name}</h2>
                  <p>{Lomba.description}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div>

      </div>
    </div>
    );
    
}
export default ListLomba;