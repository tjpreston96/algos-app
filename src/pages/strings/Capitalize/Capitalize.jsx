import React, { useState } from "react";

const Capitalize = () => {
  const [str, setStr] = useState(null);
  const [results, setResults] = useState(null);

  const onInputChange = (e) => {
    setStr(e.target.value);
  };

  const cap = () => {
    const words = [];

    for (let word of str.split(" ")) {
      words.push(word[0].toUpperCase() + word.slice(1));
    }
    setResults(words.join(" "));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    cap();
  };

  return (
    <>
      <div className="margin-div">
        <div className="page">
          <h1>Capitalize</h1>
          <form onSubmit={onFormSubmit}>
            <input
              placeholder="Please enter a {string}"
              type="text"
              className="form-control"
              onChange={onInputChange}
            />
          </form>
          <br />
          <h3>Output</h3>
          {results}
        </div>
      </div>
    </>
  );
};

export default Capitalize;
