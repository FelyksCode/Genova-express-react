import React, { useState } from "react";

function Regisform() {
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [email, setEmail] = useState("");
  const [ktm, setKtm] = useState("");
  const [lomba, setLomba] = useState("");

  function handleForm(event) {
    event.preventDefault();

    // Create an instance of FormData
    const formData = new FormData();

    // Append the text fields to formData
    formData.append("name", name);
    formData.append("nim", nim);
    formData.append("email", email);
    // formData.append("lomba", lomba); // Belum bisa gara gara schema.js bagian userRegisterSchema dari server

    // Append the file to formData.
    // The 'ktm' state should hold the file itself, not just its value.
    // Thus, you need to adjust the onChange handler for the file input.
    if (ktm) {
      formData.append("ktm", ktm);
    }

    // Note: Link Fetch-nya ntar diganti nyesuain base URL api
    fetch("http://localhost:8090/users/register/65eaf6ff92b679723f5d1d45", {
      method: "post",
      body: formData, // No need to set 'Content-Type' header, browser will set 'multipart/form-data' automatically
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
    console.log("Form Submitted");
  }

  return (
    <form onSubmit={handleForm}>
      <div>
        <label>Nama:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>NIM:</label>
        <input
          type="number"
          name="nim"
          onChange={(e) => setNim(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Photo:</label>
        <input
          type="file"
          name="photo"
          accept="image/png, image/jpg, image/jpeg"
          onChange={(e) => setKtm(e.target.files[0])}
          required
        />
      </div>
      <div>
        <label>Lomba:</label>
        <select
          name="competition"
          onChange={(e) => setLomba(e.target.value)}
          required
        >
          <option value="">Pilih Lomba</option>
          <option value="Mobile Legend">Mobile Legend</option>
          <option value="Valorant">Valorant</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Regisform;
