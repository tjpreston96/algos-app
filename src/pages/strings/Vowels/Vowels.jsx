import React, { useState } from "react";

const Vowels = () => {
  const [str, setStr] = useState(null);
  const [result, setResult] = useState(null);

  const onInputChange = (e) => {
    setStr(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    vowelCheck();
  };

  const vowelCheck = () => {
    const matches = str.match(/[aeiou]/gi);
    return setResult(matches ? matches.length : 0);
  };

  return (
    <>
      <div className="margin-div">
        <div className="page">
          <h1>Vowels</h1>
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Please enter a {string}"
            />
          </form>
          <h4>Output</h4>
          {result}
        </div>
      </div>
    </>
  );
};

export default Vowels;
