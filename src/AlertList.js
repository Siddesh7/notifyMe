import React, { useEffect, useState } from "react";

const AlertList = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Get the alerts from the server when the component mounts
    fetch("http://localhost:3000/alerts")
      .then((response) => response.json())
      .then((alerts) => setAlerts(alerts));
  }, []);

  return (
    <ul>
      {alerts.map((alert) => (
        <li key={alert._id}>
          {alert.price} - {alert.email}
        </li>
      ))}
    </ul>
  );
};

export default AlertList;
