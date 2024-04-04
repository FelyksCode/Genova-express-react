import React, { useState } from "react";
import axios from "axios";
import FormData from "form-data";
// import fs from "fs";

// Komponen AnggotaTim
const AnggotaTim = ({ index, handleInputChange }) => {
  return (
    <div>
      <label>nama {index}:</label>
      <input type="text" name={`nama-${index}`} onChange={handleInputChange} />
      <label>NIM {index}:</label>
      <input type="text" name={`nim-${index}`} onChange={handleInputChange} />
      <label>Email {index}:</label>
      <input
        type="email"
        name={`email-${index}`}
        onChange={handleInputChange}
      />
      <label>Username {index}:</label>
      <input
        type="text"
        name={`username-${index}`}
        onChange={handleInputChange}
      />
      <label>Foto {index}:</label>
      <input type="file" name={`foto-${index}`} onChange={handleInputChange} />
    </div>
  );
};

// Komponen FormTim
const FormTim = () => {
  const [anggotaTim, setAnggotaTim] = useState([]);
  const [namateam, setNamaTeam] = useState("");
  const [idline, setIdLine] = useState("");

  const handleJenisTimChange = (e) => {
    const jenis = e.target.value;
    const jumlahAnggota = getJumlahAnggota(jenis);
    setAnggotaTim(
      Array(jumlahAnggota)
        .fill()
        .map(() => ({ nama: "", nim: "", email: "", username: "", foto: null }))
    );
  };

  const getJumlahAnggota = (jenis) => {
    switch (jenis) {
      case "basket":
        return 7;
      case "badminton":
        return 6;
      case "futsal":
        return 12;
      case "volly":
        return 10;
      default:
        return 0;
    }
  };

  const handleInputChange = (e, index) => {
    const { name } = e.target;
    const [field, anggotaIndex] = name.split("-");
    const updatedAnggotaTim = [...anggotaTim];

    if (e.target.type === "file") {
      updatedAnggotaTim[parseInt(anggotaIndex, 10)][field] = e.target.files[0];
    } else {
      const { value } = e.target;
      updatedAnggotaTim[parseInt(anggotaIndex, 10)][field] = value;
    }

    setAnggotaTim(updatedAnggotaTim);
  };

  const handleNamaTeamChange = (e) => {
    setNamaTeam(e.target.value);
  };

  const handleIdLineChange = (e) => {
    setIdLine(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("team_name", namateam);
      formData.append("line_id", idline);
      anggotaTim.forEach((anggota, index) => {
        formData.append(`users[${index}][name]`, anggota.nama);
        formData.append(`users[${index}][email]`, anggota.email);
        formData.append(`users[${index}][nim]`, anggota.nim);
        formData.append(`users[${index}][ktm]`, anggota.foto);
        formData.append(`users[${index}][game_id]`, anggota.username);
      });

      console.log(formData.entries());

      const response = await axios.post(
        "http://localhost:8090/users/register/660ab388747695f586c790aa",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log();
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nama Team:</label>
      <input
        type="text"
        name="nameteam"
        value={namateam}
        onChange={handleNamaTeamChange}
      />

      <label>Id Line:</label>
      <input
        type="text"
        name="idline"
        value={idline}
        onChange={handleIdLineChange}
      />
      <label>Pilih Jenis Tim:</label>
      <select onChange={handleJenisTimChange}>
        <option value="">Pilih Jenis Tim</option>
        <option value="basket">Basket (7 anggota)</option>
        <option value="badminton">Badminton (2 anggota)</option>
        <option value="futsal">Futsal (12 anggota)</option>
        <option value="volly">Volly (10 anggota)</option>
      </select>
      {anggotaTim.map((anggota, index) => (
        <AnggotaTim
          key={index}
          index={index}
          handleInputChange={(e) => handleInputChange(e, index)}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormTim;
