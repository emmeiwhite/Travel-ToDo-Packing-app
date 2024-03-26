import React, { useState } from "react";

export default function FutureDate() {
  const [range, setRange] = useState(1);
  const [count, setCount] = useState(1);

  function handlePrev() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  function handleNext() {
    setCount((nextCount) => nextCount + 1);
  }

  function handleCountChange(e) {
    const inputValue = e.target.value;
    // Ensure that input is not empty and is a valid number
    if (inputValue !== "" && !isNaN(inputValue)) {
      setCount(parseInt(inputValue));
    } else {
      // If input is empty or not a number, set count to 0
      setCount(0);
    }
  }

  return (
    <div className="future-event">
      <h2>Future Date Steps</h2>
      <input
        type="range"
        min="0"
        max="10"
        value={range}
        onChange={(e) => setRange(Number(e.target.value))}
      />
      <span>Step {range}</span>

      <div className="total-steps-counter">
        <button onClick={handlePrev}>-</button>
        <input
          type="number"
          value={count}
          onChange={handleCountChange}
        />
        <button onClick={handleNext}>+</button>
      </div>
    </div>
  );
}
