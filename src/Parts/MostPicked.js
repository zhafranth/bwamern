import React from "react";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <h3 className="mb-3">Most Picked</h3>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div
              key={index}
              className={`item colom-4 ${index === 0 ? " row-2" : " row-1"}`}
            >
              <Fade bottom delay={500 * index}>
                <div className="card card-featured">
                  <div className="tag">
                    ${item.price}
                    <span className="font-weight-light">per {item.unit}</span>
                  </div>
                  <figure className="img-wrapper">
                    <img
                      src={
                        item.imageId.length != 0
                          ? `https://admin-bwamern.herokuapp.com/${item.imageId[0].imageUrl}`
                          : "https://images.unsplash.com/photo-1611095973512-45224aae1990?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
                      }
                      alt={item.name}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      className="d-block text-white strached-link"
                      href={`/properties/${item._id}`}
                    >
                      <h5>{item.name}</h5>
                    </Button>
                    <span className="font-weight-light">
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
