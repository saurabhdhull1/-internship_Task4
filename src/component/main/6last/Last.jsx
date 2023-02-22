import React from "react";
import "./Last.css";
import Lastmini from "./Lastmini";

function Last() {
  const details = [
    {
      title: "Samsung 40N5300 S...",
      img: "/last8.png",
      wrongrate: "RS 50.000",
      rate: "RS 56.000",
    },
    {
      title: "Samsung Automatic.. ",
      img: "/last7.png",
      wrongrate: "RS 1.10.000",
      rate: "RS 1.00.000",
    },
    {
      title: "Haier HSU-12HFMAC ..",
      img: "/last6.png",
      wrongrate: "RS 76.000",
      rate: "RS 70.000",
    },
    {
      title: "Anex Roti Maker ..",
      img: "/last5.png",
      wrongrate: "RS 70.000",
      rate: "RS 60.000",
    },
    {
      title: "Gree GS-12FITH..",
      img: "/last4.png",
      wrongrate: "RS 86.000",
      rate: "RS 80.000",
    },
    {
      title: "Gree Air Conditioner..",
      img: "/last3.png",
      wrongrate: "RS 1.10.000",
      rate: "RS 1.00.000",
    },
    {
      title: "Gree Air Conditioner..",
      img: "/last2.png",
      wrongrate: "RS 1.10.000",
      rate: "RS 1.00.000",
    },
    {
      title: "Gree Air Conditioner..",
      img: "/last1.png",
      wrongrate: "RS 1.10.000",
      rate: "RS 1.00.000",
    },
  ];

  return (
    <div className="last">
      <div>
        <h1>
          <span>Featured</span> Products
        </h1>
        <Lastmini
          title={details[4].title}
          img={details[4].img}
          wrongrate={details[4].wrongrate}
          rate={details[4].rate}
        />
        <Lastmini
          title={details[5].title}
          img={details[5].img}
          wrongrate={details[5].wrongrate}
          rate={details[5].rate}
        />
        <Lastmini
          title={details[6].title}
          img={details[6].img}
          wrongrate={details[6].wrongrate}
          rate={details[6].rate}
        />
      </div>
      <div>
        <h1>
          <span>On sale</span> Products
        </h1>
        <Lastmini
          title={details[7].title}
          img={details[7].img}
          wrongrate={details[7].wrongrate}
          rate={details[7].rate}
        />
        <Lastmini
          title={details[1].title}
          img={details[1].img}
          wrongrate={details[1].wrongrate}
          rate={details[1].rate}
        />
        <Lastmini
          title={details[2].title}
          img={details[2].img}
          wrongrate={details[2].wrongrate}
          rate={details[2].rate}
        />
      </div>
      <div>
        <h1>
          <span>Top rated</span> Products
        </h1>
        <Lastmini
          title={details[0].title}
          img={details[0].img}
          wrongrate={details[0].wrongrate}
          rate={details[0].rate}
        />
        <Lastmini
          title={details[1].title}
          img={details[1].img}
          wrongrate={details[1].wrongrate}
          rate={details[1].rate}
        />
        <Lastmini
          title={details[2].title}
          img={details[2].img}
          wrongrate={details[2].wrongrate}
          rate={details[2].rate}
        />
      </div>
    </div>
  );
}

export default Last;
