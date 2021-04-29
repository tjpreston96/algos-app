import React, { useState } from "react";

const IntReversal = () => {
  const [num, setNum] = useState(null);
  const [result, setResult] = useState(null);

  const onInputChange = (e) => {
    setNum(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    reversal();
  };

  const reversal = () => {
    const reversed = parseInt(num.toString().split("").reverse().join(""));

    if (num < 0) {
      setResult(reversed * -1);
    } else setResult(reversed);
  };

  return (
    <>
      <div className="margin-div">
        <div className="page">
          <h1>Integer Reversal</h1>
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Please enter a {number}"
              onChange={onInputChange}
            />
          </form>
          <h4>Output</h4>
          {result}
        </div>
      </div>
    </>
  );
};

export default IntReversal;
