import React, { useState } from "react";

const Chunk = () => {
  const [arr, setArr] = useState(null);
  const [chunkSize, setChunkSize] = useState(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const onArrayChange = (e) => {
    setArr(e.target.value);
  };

  const onChunkChange = (e) => {
    setChunkSize(e.target.value);
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
            <input
              onChange={onChunkChange}
              placeholder="Please enter desired # of chunks"
              type="text"
              className="form-control"
            />
          </form>
          'Example Array: [[2,3],[7,4,5],[6,3,45,64,97]]'
        </div>
      </div>
    </>
  );
};

export default Chunk;
