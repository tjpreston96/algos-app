import React, { useState } from "react";

const Fibonacci = () => {
  const [num, setNum] = useState(null);
  const [result, setResult] = useState(null);
  const [seenIndexes, setSeenIndexes] = useState([]);

  const onInputChange = (evt) => {
    setNum(evt.target.value);
  };

  const fib = () => {
    if (num !== null) {
      let idx = num,
        a = 1,
        b = 0,
        temp;

      while (idx >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        idx--;
      }

      setResult(b);

      seenIndexes.push(`For index ${num}, I calculated ${b}`);
    }
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    fib();
  };



  return (
    <>
      <div className="margin-div">
        <div className="page">
          <h1>Fibonacci</h1>
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              className="form-control"
              onChange={onInputChange}
              placeholder="Please enter a {number}"
            />
            <h4>Output</h4>
            {result}

            <h4>Previous </h4>
            {seenIndexes}
          </form>
        </div>
      </div>
    </>
  );
};

export default Fibonacci;
