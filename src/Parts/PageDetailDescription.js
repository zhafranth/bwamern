import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the place</h4>
      {ReactHtmlParser(data.description)}
      <div className="row" style={{ marginBottom: 30 }}>
        {data.features.map((item, index) => {
          return (
            <div
              className="col-3"
              key={`featured-icon-${index}`}
              style={{ marginBottom: 20 }}
            >
              <img
                src={item.imageUrl}
                alt={item._id}
                width="38"
                className="d-block mb-2"
              />
              <span>{item.qty}</span>
              <span className="font-weight-light text-gray-500">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
