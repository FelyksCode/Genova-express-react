import React from "react";

function StepThree({
  prevStep,
  nextStep,
  handleChange,
  handleFileChange,
  handleSubmit,
}) {
  // Correctly handle file changes by calling handleFileChange directly with the correct parameter
  const onFileChange = (e) => {
    handleFileChange(e); // Assuming handleFileChange is designed to be curried or requires the field name as the first argument
  };

  return (
    <div>
      <h2>Last Step: Payment</h2>
      <p>Bayar ke bank: 123</p>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent the default form submission
          handleSubmit();
        }}
      >
        <input type="file" name="pembayaran" onChange={onFileChange} />
        <button type="button" onClick={prevStep}>
          Prev
        </button>
        <button type="submit">Finish</button>
      </form>
    </div>
  );
}

export default StepThree;
