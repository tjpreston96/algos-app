import React, { useState } from "react";

const Anagrams = () => {
  const [str1, setStr1] = useState(null);
  const [str2, setStr2] = useState(null);
  const [result, setResult] = useState(null);

  const onStr1Change = (e) => {
    setStr1(e.target.value);
  };

  const onStr2Change = (e) => {
    setStr2(e.target.value);
  };

  return (
    <>
      <div className="margin-div">
        <div className="page">
          <h1>Anagrams</h1>
          <form>
            <label> String 1 </label>
            <input
              type="text"
              className="form-control"
              placeholder="Please enter a {string}"
              onChange={onStr1Change}
            />
            <br />
            <label> String 2 </label>
            <input
              type="text"
              className="form-control"
              placeholder="Please enter a {string}"
              onChange={onStr2Change}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Anagrams;
