import React from "react";
import Button from "elements/Button";
import formatNumber from "utils/FormatNumber";

import ImgHero from "assets/images/img-hero.jpg";
import ImgFrame from "assets/images/img-frame.jpg";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTraveler from "assets/images/icons/ic_traveler.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col pr-5" style={{ width: 422 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work,
            <br /> Start Next Vacation
          </h1>
          <p
            className="font-weight-light w-75 mb-5 line-height-1"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show me
          </Button>
          <div className="row mt-5">
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="auto"
                src={IconTraveler}
                alt={props.data.travelers}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)}{" "}
                <span className="text-gray-500 font-weight-light">
                  travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="auto"
                src={IconTreasure}
                alt={props.data.treasures}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.treasures)}{" "}
                <span className="text-gray-500 font-weight-light">
                  treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="auto"
                src={IconCities}
                alt={props.data.cities}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)}{" "}
                <span className="text-gray-500 font-weight-light">cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-auto ">
          <div style={{ width: 520, height: 410 }}>
            <img
              src={ImgHero}
              alt="image Hero"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={ImgFrame}
              alt="image Frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
