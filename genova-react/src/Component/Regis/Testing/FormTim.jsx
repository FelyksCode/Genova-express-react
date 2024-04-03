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
      <label>Foto {index}:</label>
      <input type="file" name={`foto-${index}`} onChange={handleInputChange} />
    </div>
  );
};

// Komponen FormTim
const FormTim = () => {
  const [anggotaTim, setAnggotaTim] = useState([]);

  const handleJenisTimChange = (e) => {
    const jenis = e.target.value;
    const jumlahAnggota = getJumlahAnggota(jenis);
    setAnggotaTim(
      Array(jumlahAnggota)
        .fill()
        .map(() => ({ nama: "", nim: "", email: "", foto: null }))
    );
  };

  const getJumlahAnggota = (jenis) => {
    switch (jenis) {
      case "basket":
        return 7;
      case "badminton":
        return 2;
      case "futsal":
        return 12;
      case "volly":
        return 10;
      default:
        return 0;
    }
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const [field, anggotaIndex] = name.split("-");
    const updatedAnggotaTim = [...anggotaTim];
    updatedAnggotaTim[parseInt(anggotaIndex, 10)][field] = value; // Perbaikan di sini
    setAnggotaTim(updatedAnggotaTim);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mengirim data ke backend
    try {
      const formData = new FormData();
      anggotaTim.forEach((anggota, index) => {
        formData.append(`users[${index}][name]`, anggota.nama);
        formData.append(`users[${index}][email]`, anggota.email);
        formData.append(`users[${index}][nim]`, anggota.nim);
        formData.append(`users[${index}][ktm]`, anggota.foto);
      });

      const response = await axios.post(
        "http://localhost:8090/users/register/660ab388747695f586c790aa",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
