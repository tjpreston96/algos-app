import React, { useState } from "react";

const Fibonacci = () => {
  const [num, setNum] = useState(null);
  const [index, setIndex] = useState(null);
  const [result, setResult] = useState(null);

  const onInputChange = (evt) => {
    setNum(evt.target.value);
  };

  const fib = () => {
    if (index < 2) return 1;
    setResult(fib(index - 1) + fib(index - 2));
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    setIndex(num);
    fib();
  };

  return (
    <>
      <div className="margin-div">
        <div className="page">
          <h1>Fibonacci (Recursive)</h1>
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              className="form-control"
              onChange={onInputChange}
              placeholder="Please enter a {number}"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Fibonacci;
