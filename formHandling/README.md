# 📝 Multi-Step Form in React

A **multi-step form** built with React that demonstrates **conditional rendering**, **form validation**, and **data persistence** using `localStorage`.

---

## 🚀 Features

- 📍 **Step-based navigation** (Personal Details → Address → Payment)
- ✅ **Form validation** at each step
- 💾 **Auto-save form data** to `localStorage`
- 🔄 **Data persistence** across page reloads
- ⚡ Built using React **hooks** (`useState`, `useEffect`)
  `

---

## 🧩 Components

1. PersonalDetails
   Collects name and email
   Validates that name is not empty and email contains @

2. Address
   Collects street and city
   Ensures both fields are filled

3. Payment
   Collects cardNumber and expiry
   Validates:
   Card number is 16 digits
   Expiry is not empty

## ⚙️ Core Logic

State Management
step: Tracks the current step
formData: Stores data for all steps

Navigation
nextStep → Moves forward only if validation passes
prevStep → Moves backward

Validation

```
const validateStep = (stepKey, data) => {
  switch (stepKey) {
    case "personalDetails":
      return data.name.trim() !== "" && data.email.includes("@");
    case "address":
      return data.street.trim() !== "" && data.city.trim() !== "";
    case "payment":
      return data.cardNumber.length === 16 && data.expiry.trim() !== "";
    default:
      return false;
  }
};
```

Persistence

```
useEffect(() => {
  const savedData = localStorage.getItem("multiStepFormData");
  if (savedData) setFormData(JSON.parse(savedData));
}, []);

useEffect(() => {
  localStorage.setItem("multiStepFormData", JSON.stringify(formData));
}, [formData]);
```
