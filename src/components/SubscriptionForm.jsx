// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = (input) => {
    // Very basic email validation
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    setIsEmailValid(isValid);
    return isValid;
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    validateEmail(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmailValid) {
      alert("Please enter a valid email address");
      return;
    }
    // Process the subscription form here
    alert("Successfully subscribed: " + email);
  };

  return (
    <div>
      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={email}
            className={!isEmailValid ? "error" : ""}
          />
          {!isEmailValid && (
            <div style={{ color: "red" }}>Invalid email address</div>
          )}
        </div>
        <div>
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionForm;
