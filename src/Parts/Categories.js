import React from "react";
import Button from "elements/Button";

export default function Categories({ data }) {
  return data.map((categories, index1) => {
    return (
      <section className="container" key={`categories-${index1}`}>
        <h4 className="mb-3 font-weigt-medium">{categories.name}</h4>
        <div className="container-grid">
          {categories.items === 0 ? (
            <div className="row justify-content-center">
              <div className="col-auto">Thers no property at this category</div>
            </div>
          ) : (
            categories.items.map((item, index2) => {
              return (
                <div
                  className="item colom-3 row-1"
                  key={`category-${index1}-item${index2}`}
                >
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular{" "}
                        <span className="font-weight-light">choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        style={{ height: 180 }}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="d-block text-gray-800 strached-link"
                        href={`/properties/${item._id}`}
                      >
                        <h5 className="h4">{item.name}</h5>
                      </Button>
                      <span className="text-gray-500">
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
