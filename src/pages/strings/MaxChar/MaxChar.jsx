import React, { useState } from "react";

const MaxChars = () => {
  const [str, setStr] = useState(null);
  const [result, setResult] = useState(null);
  const [result2, setResult2] = useState(null);

  const onInputChange = (e) => {
    setStr(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    maxChar();
  };

  const maxChar = () => {
    let charMap = {};
    let max = 0;
    let maxChar = "";

    // Character Map
    for (let char of str) {
      if (charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }

    //   iterate charMap to find most frequently used value
    //   'for in' syntax (ES2015) because charMap is an object
    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }

    setResult(`Character: ${maxChar}`);
    setResult2(`Times seen: ${max}`);
  };
  return (
    <>
      <div className="margin-div">
        <div className="page">
          <h1>MaxChar</h1>
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Please enter a {string}"
              onChange={onInputChange}
            />
          </form>
          <br />
          <h3>Output</h3>
          {result} <br /> {result2}
        </div>
      </div>
    </>
  );
};

export default MaxChars;
