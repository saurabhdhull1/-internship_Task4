import React from "react";
import "./Dealday.css";

function Dealday() {
  return (
    <div className="container-fluid">
      <div className="dealday">
        <div>
          <h2>
            DEALS <span>OF THE DAY</span>
          </h2>
          <p>
            You cannot inspect quality into the product; it is already there. I
            am not a product of my circumstances. I am a product of my
            decisions.
          </p>
          <button>View more</button>
        </div>
        <div>
          <div className="dealdaytop">
            <div>
              <div>Add to cart</div>
              <div>RS 30,000</div>
            </div>
          </div>
          <img src="mobile.png" alt="" />
        </div>
        <div>
          <div className="dealdaytop">
            <div>
              <div>Add to cart</div>
              <div>RS 30,000</div>
            </div>
          </div>
          <img src="watch.png" alt="" />
        </div>
        <div>
          <div className="dealdaytop">
            <div>
              <div>Add to cart</div>
              <div>RS 30,000</div>
            </div>
          </div>
          <img src="usb.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Dealday;
