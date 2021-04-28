import React, { useState } from "react";

const Palindrome = () => {
  const [str, setStr] = useState(null);
  const [result, setResult] = useState(null);

  const onInputChange = (e) => {
    setStr(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    isPalindrome();
  };

  const isPalindrome = () => {
    setResult(
      str.toLowerCase() === str.toLowerCase().split("").reverse().join("")
        ? "True"
        : "False"
    );
  };

  return (
    <>
      <div className="margin-div">
        <div className="page">
          <h1>Palindrome Tester</h1>
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Please enter a {String}"
              onChange={onInputChange}
            />
          </form>
          <h4>Output</h4>
          {result ? result : `waiting on input...`}
        </div>
      </div>
    </>
  );
};

export default Palindrome;
