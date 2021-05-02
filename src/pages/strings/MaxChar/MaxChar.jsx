import React, { useState } from "react";

const MaxChar = () => {
  const [str, setStr] = useState(null);
  const [result, setResult] = useState(null);

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
        </div>
      </div>
    </>
  );
};

export default MaxChar;
