import React from "react";

function Carousel1({h2,p,img,hide}) {
  
  return (
    <div className="col-md-3" style={{borderRadius:'12px'}} id={hide}>
      <div className="carousel1ImgTop" style={{borderRadius:'12px'}} >
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
      <img src={img} className="d-block w-100" alt="..." />
    </div>
  );
}

export default Carousel1;
