import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

function RegisForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
    console.log(formData);
    setCurrentStep(currentStep + 1);
  };
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleFileChange = (inputName) => (e) => {
    // Assuming you want to store the file object itself in the form data
    const value = e.target.type === "file" ? e.target.files[0] : e.target.value;
    setFormData({ ...formData, [inputName]: e.target.files[0] });
  };

  const handleSubmit = () => {
    console.log(formData);
    // Here you would typically send the data to a server or otherwise process it
  };

  switch (currentStep) {
    case 1:
      return (
        <StepOne
          nextStep={nextStep}
          formData={formData}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <StepTwo
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
        />
      );
    case 3:
      return (
        <StepThree
          prevStep={prevStep}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
        />
      );
    default:
      return <div>Unknown step</div>;
  }
}

export default RegisForm;
