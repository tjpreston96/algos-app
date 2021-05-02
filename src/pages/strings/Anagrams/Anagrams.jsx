import React, { useState } from "react";

const Anagrams = () => {
  const [strA, setStrA] = useState(null);
  const [strB, setStrB] = useState(null);
  const [result, setResult] = useState(null);

  const onStrAChange = (e) => {
    setStrA(
      e.target.value
        .replace(/[^\w]/g, "")
        .toLowerCase()
        .split("")
        .sort()
        .join("")
    );
  };

  const onStrBChange = (e) => {
    setStrB(
      e.target.value
        .replace(/[^\w]/g, "")
        .toLowerCase()
        .split("")
        .sort()
        .join("")
    );
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    isAnagram();
    console.log(isAnagram());
  };

  const isAnagram = () => {
    return setResult(strA === strB);
  };

  return (
    <>
      <div className="margin-div">
        <div className="page">
          <h1>Anagrams</h1>
          <form onSubmit={onFormSubmit}>
            <label> String A </label>
            <input
              type="text"
              className="form-control"
              placeholder="Please enter a {string}"
              onChange={onStrAChange}
            />
            <br />
            <label> String B </label>
            <input
              type="text"
              className="form-control"
              placeholder="Please enter a {string}"
              onChange={onStrBChange}
            />
            <button type="submit" hidden></button>
          </form>
          <h4>Output</h4>
          {result ? (result ? "True" : "False") : "Waiting for input..."}
        </div>
      </div>
    </>
  );
};

export default Anagrams;
