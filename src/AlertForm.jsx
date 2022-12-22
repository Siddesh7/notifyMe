import React, { useState } from "react";

const AlertForm = () => {
  const [price, setPrice] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a POST request to the server to create a new alert
    fetch("http://localhost:3000/alerts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price, email }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Set Alert</button>
    </form>
  );
};

export default AlertForm;
