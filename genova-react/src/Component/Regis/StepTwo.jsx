import React from "react";
import FormAnggota from "./FormAnggota/FormAnggota";

function StepTwo({
  prevStep,
  nextStep,
  handleChange,
  formData,
  handleFileChange,
}) {
  const isMobileLegend = formData.lomba === "Mobile Legend";
  const isValorant = formData.lomba === "Valorant";
  const isBasket = formData.lomba === "Basket";
  const isFutsal = formData.lomba === "Futsal";
  const isVoli = formData.lomba === "Voli";
  const isBadminGandaCampuran = formData.lomba === "Badminton Ganda Campuran";
  const isBadminGandaPutra = formData.lomba === "Badminton Ganda Putra";
  const isBadminGandaPutri = formData.lomba === "Badminton Ganda Putri"; // Corrected the typo here

  // Initialize teamMembersCount outside the if conditions
  let teamMembersCount = 0;

  // Determine the number of team members based on the game selected
  if (isMobileLegend || isValorant || isFutsal) {
    teamMembersCount = 6;
  } else if (isBasket) {
    teamMembersCount = 7;
  } else if (isVoli) {
    teamMembersCount = 10;
  } else if (
    isBadminGandaCampuran ||
    isBadminGandaPutra ||
    isBadminGandaPutri
  ) {
    teamMembersCount = 2; // Assuming Badminton doubles
  }

  // Generate an array of team member components
  const teamMemberForms = Array.from(
    { length: teamMembersCount },
    (_, index) => (
      <FormAnggota
        key={index}
        nomor={index + 1}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        // Removed the nextStep here because it might not be relevant in this context
      />
    )
  );

  return (
    <div>
      {teamMemberForms}
      <button type="button" onClick={prevStep}>
        Prev
      </button>
      <button type="button" onClick={nextStep}>
        Next
      </button>
    </div>
  );
}

export default StepTwo;
