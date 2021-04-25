import React, { useState } from "react";
import "./Fizzbuzz.css";

const Fizzbuzz = () => {
  const [num, setNum] = useState(null);
  const [fizzArr, setFizzArr] = useState([]);

  const onInputChange = (evt) => {
    setNum(evt.target.value);
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    fizzbuzz();
  };

  const fizzbuzz = () => {
    let result = [];
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push(`fizzbuzz`);
      } else if (i % 3 === 0) {
        result.push(`fizz`);
      } else if (i % 5 === 0) {
        result.push("buzz");
      } else {
        result.push(i);
      }
    }

    setFizzArr(result);
  };

  return (
    <div className="margin-div">
      <div className="page">
        <h1>FizzBuzz</h1>

        <form onSubmit={onFormSubmit}>
          <div className="input-group ">
            {/* <label htmlFor="">Please Enter Number: </label> */}
            <input
              type="text"
              className="form-control"
              placeholder="Please enter a {number}"
              onChange={onInputChange}
            />
          </div>
        </form>
        <hr />
        <div>
          <h2>Output</h2>
          <p>
            {/* {fizzArr.map((i) => (
              <p>{i}</p>
            ))} */}
            {fizzArr.length ? fizzArr.join(', '): <div class="loader">Loading...</div>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fizzbuzz;
