import React from "react";

function StepOne({ nextStep, handleChange, formData }) {
  return (
    <div>
      <h2>Step 1: Team Name</h2>
      <form>
        <input
          name="teamName"
          type="text"
          placeholder="Team name"
          value={formData.teamName}
          onChange={handleChange("teamName")}
        />
        <input
          name="idLine"
          type="text"
          placeholder="ID Line Ketua"
          value={formData.idLine}
          onChange={handleChange("idLine")}
        />
        <select name="lomba" onChange={handleChange("lomba")}>
          <option value={formData.lomba}>{formData.lomba}</option>
          <option value="Mobile Legend">Mobile Legend</option>
          <option value="Valorant">Valorant</option>
          <option value="Badminton Ganda Putri">Badmin Ganda Putri</option>
        </select>

        <button type="button" onClick={nextStep}>
          Next
        </button>
      </form>
    </div>
  );
}

export default StepOne;
