import React from "react";

function FormAnggota({ nomor, handleChange, formData, handleFileChange }) {
  return (
    <div>
      <h2>Nama Anggota {nomor}</h2>
      <form>
        <input
          name={`anggota${nomor}`}
          type="text"
          placeholder="Nama Anggota"
          onChange={handleChange(`anggota${nomor}`)}
        />
        <input
          name={`nim${nomor}`}
          type="text"
          placeholder="Nim"
          onChange={handleChange(`nim${nomor}`)}
        />
        <input
          name={`emailStudent${nomor}`}
          type="email"
          placeholder="Email Student"
          onChange={handleChange(`emailStudent${nomor}`)}
        />
        <input
          type="file"
          name={`ktm${nomor}`}
          onChange={
            handleFileChange ? handleFileChange(`ktm${nomor}`) : () => {}
          }
        />
      </form>
    </div>
  );
}

export default FormAnggota;
