import React, { useState, useEffect } from "react";
import "../../global.scss";
import "./AverageNumber.scss";
import Navigation from "../../components/Navigation/Navigation";
import uniqid from "uniqid";

const AverageNumbers = () => {
  const [numbers, setNumbers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/history")
      .then((res) => res.json())
      .then((data) => {
        setNumbers([...data]);
      });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const number = formData.get("number");

    // Post the number to the API
    fetch("http://localhost:4000/api/calculations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ number }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the numbers with the new number
        setNumbers([...numbers, { ...data }]);
      });
  };

  return (
    <div>
      <Navigation />
      <div className="average-numbers">
        <div className="average-numbers-header">
          <h1>Average Numbers</h1>
        </div>
        <div className="average-numbers-form">
          <form onSubmit={handleSubmit}>
            <input type="number" name="number" placeholder="Enter a number" />
            <button type="submit">Send and Average</button>
          </form>
        </div>
        <div className="average-numbers-list">
          <ul>
            {numbers
              .slice()
              .reverse()
              .map((number) => (
                <li key={uniqid()}>
                  Previous: {number.previous}, Current: {number.requested},
                  Average: {number.average}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AverageNumbers;
