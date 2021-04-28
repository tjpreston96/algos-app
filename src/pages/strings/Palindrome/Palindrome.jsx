import React, { useState } from "react";

const Palindrome = () => {
  const [str, setStr] = useState(null);

  const onInputChange = (e) => {
    setStr(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    isPalindrome();
  };

  const isPalindrome = () => {
    return str === str.split("").reverse().join("");
  };
  return (
    <>
      <div className="margin-div">
        <div className="page">
          <h1>Palindrome</h1>
          <form onSubmit={onFormSubmit}></form>
        </div>
      </div>
    </>
  );
};

export default Palindrome;
