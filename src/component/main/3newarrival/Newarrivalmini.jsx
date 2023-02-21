import React from "react";
import "./Newarrival.css";

function Newarrivalmini({ title, img, wrongrate, rate }) {
  return (
    <div className="newarrivalmini ">
      <div>
      <p>Bin Bakar Electronics</p>
      <p>{title}</p>
      </div>
      <img src={img} alt="" />
      <div>
        <strike>{wrongrate}</strike> 
        <div>{rate}</div>
        <button>Add to card</button>
      </div>
      
    </div>
  );
}

export default Newarrivalmini;
