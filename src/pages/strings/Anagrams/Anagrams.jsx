import React, { useState } from "react";

const Anagrams = () => {
  const [str1, setStr1] = useState(null);
  const [str2, setStr2] = useState(null);
  const [result, setResult] = useState(null);


  return (
    <>
      <div className="margin-div">
        <div className="page">
          <h1>Anagrams</h1>
        </div>
      </div>
    </>
  );
};

export default Anagrams;
