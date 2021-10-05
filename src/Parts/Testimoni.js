import React from "react";
import Star from "elements/Star";
import TestimonialAccent from "../assets/images/image-testimonial-frame.jpg";
import Button from "elements/Button";

export default function Testimoni({ data }) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto" style={{ marginRight: 70 }}>
          <div
            className="testimonial-hero"
            style={{ margin: `30px 0  0 30px` }}
          >
            <img
              src={`https://admin-bwamern.herokuapp.com/${data.imageUrl}`}
              alt="Testimonial"
              style={{ zIndex: 2 }}
              className="position-absolute"
            />
            <img
              src={TestimonialAccent}
              alt="Testimonial-accent"
              style={{ zIndex: 1, margin: `-30px 0 0 -30px` }}
              className="position-absolute"
            />
          </div>
        </div>
        <div className="col">
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={3.9} widht={35} height={35} spacing={4}></Star>
          <h5 className="h2 font-weight-light line-hight-2 my-3">
            {data.content}
          </h5>
          <span className="text-gray-500">
            {data.familyName}, {data.familyOccupation}
          </span>
          <div>
            <Button
              type="link"
              isPrimary
              hasShadow
              className="btn px-5"
              style={{ marginTop: 40 }}
              href={`/testimonial/${data._id}`}
            >
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
