import React, { useState } from "react";
import "./Fizzbuzz.css";

const Fizzbuzz = () => {
  const [num, setNum] = useState(null);
  return (
    <div className='margin-div'>
      <div className="page">
        <h1>FizzBuzz</h1>

        <form action="">
          <div className="input-group ">
            {/* <label htmlFor="">Please Enter Number: </label> */}
            <input
              type="text"
              className="form-control"
              placeholder="Please enter {number}"
            />
          </div>
        </form>
        <hr />
        <div><h4>Output</h4></div>
      </div>
    </div>
  );
};

export default Fizzbuzz;
