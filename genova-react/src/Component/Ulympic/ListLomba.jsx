import { React, useState } from "react";
import "./Ulympic.css";
import img1 from "../../Assets/Images/badminton.webp";
import img2 from "../../Assets/Images/Basket.webp";
import img3 from "../../Assets/Images/Futsal.webp";
import img4 from "../../Assets/Images/Voli.webp";

function ListLomba() {
  const [active, setActive] = useState(0);

  const Lomba = [
    {
      name: "Badminton",
      description: ``,
      backgroundUrl: img1,
    },
    {
      name: "Basket",
      description: ``,
      backgroundUrl: img2,
    },
    {
      name: "Futsal",
      description: ``,
      backgroundUrl: img3,
    },
    {
      name: "Voli",
      description: ``,
      backgroundUrl: img4,
    },
  ];
  return (
    <div className="listlomba text-white">
      <ul>
        {Lomba.map((Lomba, i) => (
          <li
            key={i}
            style={{ backgroundImage: `url(${Lomba.backgroundUrl})` }}
            role="button"
            className={active === i ? "active" : ""}
            onMouseEnter={() => setActive(i)}
          >
            <h3 className="pilih listlomba">{Lomba.name}</h3>
            <div className="section-content">
              <div className="inner">
                <div className="bio">
                  <h2 className="fontt listlomba">{Lomba.name}</h2>
                  <p className="fontt listlomba">{Lomba.description}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div></div>
    </div>
  );
}
export default ListLomba;
