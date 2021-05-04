import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="margin-div">
        <div className="page">
          <h1>Welcome to AlgoApp</h1>
          <Link to="https://www.linkedin.com/in/tylerjpreston/">LinkedIn</Link>
          <Link to="https://github.com/tjpreston96">GitHub</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
