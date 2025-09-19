import React, { useState, useEffect } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalDetails: { name: "", email: "" },
    address: { street: "", city: "" },
    payment: { cardNumber: "", expiry: "" },
  });

  // Load saved form data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("multiStepFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save form data whenever it changes
  useEffect(() => {
    localStorage.setItem("multiStepFormData", JSON.stringify(formData));
  }, [formData]);

  // Handle input changes
  const handleInputChange = (stepKey, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [stepKey]: { ...prevData[stepKey], [field]: value },
    }));
  };

  // Validation
  const validateStep = (stepKey, data) => {
    switch (stepKey) {
      case "personalDetails":
        return data.name.trim() !== "" && data.email.includes("@");
      case "address":
        return data.street.trim() !== "" && data.city.trim() !== "";
      case "payment":
        return /^\d{16}$/.test(data.cardNumber) && data.expiry.trim() !== "";
      default:
        return false;
    }
  };

  // Navigation
  const nextStep = () => {
    const stepKey = Object.keys(formData)[step - 1];
    if (validateStep(stepKey, formData[stepKey])) {
      setStep((prevStep) => prevStep + 1);
    } else {
      alert("Please fill out all fields correctly before proceeding");
    }
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  // Submit
  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
    localStorage.removeItem("multiStepFormData"); // Clear storage after submit
  };

  // Render
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalDetails
            data={formData.personalDetails}
            onChange={(field, value) =>
              handleInputChange("personalDetails", field, value)
            }
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <Address
            data={formData.address}
            onChange={(field, value) =>
              handleInputChange("address", field, value)
            }
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <Payment
            data={formData.payment}
            onChange={(field, value) =>
              handleInputChange("payment", field, value)
            }
            prevStep={prevStep}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

// Step 1: Personal Details
const PersonalDetails = ({ data, onChange, nextStep }) => (
  <div className="form-container">
    <h2>Personal Details</h2>
    <input
      type="text"
      placeholder="Name"
      value={data.name}
      onChange={(e) => onChange("name", e.target.value)}
    />
    <input
      type="email"
      placeholder="Email"
      value={data.email}
      onChange={(e) => onChange("email", e.target.value)}
    />
    <button onClick={nextStep}>Next</button>
  </div>
);

// Step 2: Address
const Address = ({ data, onChange, nextStep, prevStep }) => (
  <div className="form-container">
    <h2>Address</h2>
    <input
      type="text"
      placeholder="Street"
      value={data.street}
      onChange={(e) => onChange("street", e.target.value)}
    />
    <input
      type="text"
      placeholder="City"
      value={data.city}
      onChange={(e) => onChange("city", e.target.value)}
    />
    <button onClick={prevStep}>Back</button>
    <button onClick={nextStep}>Next</button>
  </div>
);

// Step 3: Payment
const Payment = ({ data, onChange, prevStep, onSubmit }) => (
  <div className="form-container">
    <h2>Payment Information</h2>
    <input
      type="text"
      placeholder="Card Number"
      value={data.cardNumber}
      onChange={(e) => onChange("cardNumber", e.target.value)}
    />
    <input
      type="text"
      placeholder="Expiry Date"
      value={data.expiry}
      onChange={(e) => onChange("expiry", e.target.value)}
    />
    <button onClick={prevStep}>Back</button>
    <button onClick={onSubmit}>Submit</button>
  </div>
);

export default MultiStepForm;
