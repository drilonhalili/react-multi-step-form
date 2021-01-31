import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = (props) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  // Proceed to next step
  const nextStep = () => setStep((prev) => prev + 1);

  // Go back to prev step
  const prevStep = () => setStep((prev) => prev - 1);

  // Handle fields change
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Confirm formData={formData} nextStep={nextStep} prevStep={prevStep} />
      );
    case 4:
      return <Success />;
    default:
      console.log("This is a multi-step form built with React.");
  }
};

export default UserForm;
