import React, { useState } from "react";

function Regisform() {
  return (
    <form>
      <div>
        <label>Nama:</label>
        <input type="text" name="name" required />
      </div>
      <div>
        <label>NIM:</label>
        <input type="number" name="nim" required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" required />
      </div>
      <div>
        <label>Photo:</label>
        <input type="file" name="photo" accept="image/*" required />
      </div>
      <div>
        <label>Lomba:</label>
        <select name="competition" required>
          <option value="">Pilih Lomba</option>
          <option value="Lomba A">Mobile Legend</option>
          <option value="Lomba B">Valorant</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Regisform;
