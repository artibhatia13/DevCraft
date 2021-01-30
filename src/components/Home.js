import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home" style={{ backgroundColor: "grey", height: "90vh" }}>
      <div style={{ display: "flex" }}>
        <div>
          <p>Your one stop destination for all things fun and educational</p>
          <Link to="/login" className="btn">
            Get Started
          </Link>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21VMvVVdfB_E_q7KMxkIDT1_CxXWx3shonQ&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
