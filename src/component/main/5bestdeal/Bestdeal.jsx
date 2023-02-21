import React from "react";
import "./Bestdeal.css";

const Bestdeal = () => {
  return (
    <div className="container-fluid">
      <div className="row bestdeal">
        <div className="col-md-12 bestdeal1">
          <h1>
            <span>Best </span>Deals
          </h1>
        </div>
        <div className="bestdeal2">
            <div>
              <img src="bestdeal1.png" alt="" />
            </div>
            <div>
              <img src="bestdeal2.png" alt="" />
            </div>
            <div>
              <img src="bestdeal3.png" alt="" />
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Bestdeal;
