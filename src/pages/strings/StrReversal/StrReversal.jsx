import React, { useState } from "react";

const StrReversal = () => {
  const [str, setStr] = useState(null);
  const [result, setResult] = useState(null);

  const onInputChange = (evt) => {
    setStr(evt.target.value);
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    reversal();
  };

  const reversal = () => {
    return setResult(str.split("").reverse().join(""));
  };

  return (
    <div className="margin-div">
      <div className="page">
        <h1>String Reversal</h1>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter {string}"
            onChange={onInputChange}
          />
        </form>
        <h4>Output</h4>
        {result ? result : `waiting on input...`}
      </div>
    </div>
  );
};

export default StrReversal;
