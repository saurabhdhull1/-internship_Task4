import React from "react";
import Carousel1 from "./1carouser1/Carousel1";
import Dealday from "./2Dealday/Dealday";
import Newarrival from "./3newarrival/Newarrival";
import Ourproduct from "./4ourproduct/Ourproduct";
import Bestdeal from "./5bestdeal/Bestdeal";
import "./Main.css";

function Main() {
  const details = [
    {
      h2: "Electronics",
      p: "Shop",
      img: "electronics.png",
      hide: "mob_hide",
    },
    {
      h2: "Fashion",
      p: "Shop",
      img: "fashion.png",
      hide: "mob_hide",
    },
    {
      h2: "Appliances",
      p: "Shop",
      img: "appliances.png",
      hide: "mob_hide",
    },
    {
      h2: "Babies Store",
      p: "Shop",
      img: "babies_store.png",
      hide: "mob_hide",
    },
  ];

  return (
    <div>
      {/* !CarouselTop  */}

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active slider_button"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            className="slider_button"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            className="slider_button"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/slider.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/slider.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/slider.png" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>

      {/* !Carousel 1 */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container-fluid">
              <div className="row carousel1">
                <Carousel1
                  h2={details[0].h2}
                  p={details[0].p}
                  img={details[0].img}
                />
                <Carousel1
                  h2={details[1].h2}
                  p={details[1].p}
                  img={details[1].img}
                  hide={details[3].hide}
                />
                <Carousel1
                  h2={details[2].h2}
                  p={details[2].p}
                  img={details[2].img}
                  hide={details[3].hide}
                />
                <Carousel1
                  h2={details[3].h2}
                  p={details[3].p}
                  img={details[3].img}
                  hide={details[3].hide}
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row carousel1">
              <Carousel1
                h2={details[1].h2}
                p={details[1].p}
                img={details[1].img}
              />
              <Carousel1
                h2={details[2].h2}
                p={details[2].p}
                img={details[2].img}
                hide={details[3].hide}
              />
              <Carousel1
                h2={details[3].h2}
                p={details[3].p}
                img={details[3].img}
                hide={details[3].hide}
              />
              <Carousel1
                h2={details[0].h2}
                p={details[0].p}
                img={details[0].img}
                hide={details[3].hide}
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid">
              <div className="row carousel1">
                <Carousel1
                  h2={details[2].h2}
                  p={details[2].p}
                  img={details[2].img}
                />
                <Carousel1
                  h2={details[3].h2}
                  p={details[3].p}
                  img={details[3].img}
                  hide={details[3].hide}
                />
                <Carousel1
                  h2={details[0].h2}
                  p={details[0].p}
                  img={details[0].img}
                  hide={details[3].hide}
                />
                <Carousel1
                  h2={details[1].h2}
                  p={details[1].p}
                  img={details[1].img}
                  hide={details[3].hide}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ! Deal Day*/}

      <Dealday />

      {/* ! New arrivals*/}

      <Newarrival />

      {/* ! Our products*/}

      <Ourproduct />

      {/* ! Best deals*/}

      <Bestdeal />

      {/* ! Winmart*/}

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 winmart">
            <img src="Winmart.png" alt="" />
          </div>
        </div>
      </div>

      {/* ! New Arivals*/}
      <div className="container-fluid">
        <div className="row arrival1">
          <div className="col-md-12">
          <h1><span>New </span>Arrivals</h1>
          </div>
        </div>
        <div className="arrival2">
          <div><img src="newarival1.png" alt="" /></div>
          <div><img src="newarival2.png" alt="" /></div>
          <div><img src="newarival3.png" alt="" /></div>
          
        </div>
      </div>




    </div>
  );
}

export default Main;
