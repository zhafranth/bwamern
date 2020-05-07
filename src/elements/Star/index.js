import React from "react";
import propTypes from "prop-types";

import "./index.scss";

export default function Star({ value, height, widht, spacing, className }) {
  console.log(value);
  const decimal = Number(value) % 1;
  const star = [];
  let leftPost = 0;
  for (let index = 0; index < 5 && index < value - decimal; index++) {
    leftPost = leftPost + widht;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          left: index * widht,
          width: widht,
          height: height,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  if (decimal > 0 && value <= 5)
    star.push(
      <div
        className="star"
        key={`starWithDecimal`}
        style={{
          left: leftPost,
          width: decimal * widht - spacing,
          height: height,
        }}
      ></div>
    );

  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={`starplaceholder-${index}`}
        style={{
          left: index * widht,
          width: widht,
          height: height,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  return (
    <>
      <div
        className={["stars", className].join(" ")}
        style={{ height: height }}
      >
        {starPlaceholder}
        {star}
      </div>
    </>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  widht: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
};
