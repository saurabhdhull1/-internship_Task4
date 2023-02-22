import React from "react";
import "./Last.css";

function Lastmini({ title, img, wrongrate, rate }) {
  return (
    <div className="lastmini">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <div>Bin Bakar Electronics</div>
        <p>{title}</p>
        <div >
          <strike>{wrongrate }</strike>
          {" "}
          <span className="rate">{ rate}</span>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default Lastmini;
