import React, { useState } from "react";

const Chunk = () => {
  const [array, setArray] = useState(null);
  const [size, setSize] = useState(null);
  const [result, setResult] = useState(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
    chunk();
  };

  const onArrayChange = (e) => {
    setArray(e.target.value);
  };

  const onChunkChange = (e) => {
    setSize(e.target.value);
  };

  const chunk = () => {
    const chunked = [];

    for (let elem of array) {
      const last = chunked[chunked.length - 1];

      if (!last || last.length === size) {
        chunked.push([elem]);
      } else {
        last.push(elem);
      }
    }
    setResult(chunked);
  };

  return (
    <>
      <div className="margin-div">
        <div className="page">
          <h1>Chunk</h1>
          <form onSubmit={onFormSubmit}>
            <input
              onChange={onArrayChange}
              placeholder="Please enter an {array of numbers}"
              type="text"
              className="form-control"
            />
            Example Array: [2, 3, 7, 4, 5, 6, 3, 45, 64, 97]
            <input
              onChange={onChunkChange}
              placeholder="Please enter desired # of chunks"
              type="text"
              className="form-control"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Chunk;
