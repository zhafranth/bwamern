import React from "react";
import Button from "elements/Button";

export default function Categories({ data }) {
  return data.map((categories, index1) => {
    return (
      <section className="container" key={`categories-${index1}`}>
        <h4 className="mb-3 font-weigt-medium">{categories.name}</h4>
        <div className="container-grid">
          {categories.itemId === 0 ? (
            <div className="row justify-content-center">
              <div className="col-auto">Thers no property at this category</div>
            </div>
          ) : (
            categories.itemId.map((item, index2) => {
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
                        src={
                          item.imageId.length != 0
                            ? `http://admin-bwamern.herokuapp.com/${item.imageId[0].imageUrl}`
                            : "https://images.unsplash.com/photo-1611095973512-45224aae1990?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
                        }
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
