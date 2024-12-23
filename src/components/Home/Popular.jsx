import React from "react";
import popular from "../../jsonApi/Popular.json";

function Popular() {
  return (
    <div className="popular py-5">
      <h1 className="fw-bold text-center text-white py-5">
        POPULAR DESTINATION
      </h1>

      <div className="container">
        <div className="row">
          {popular.map((item, index) => {
            return (
              <div className="col-lg-3 col-md-6 col-12">
                <div className="card mb-4" key={index}>
                  <img
                    src={`${item.img}`}
                    className="img-fluid card-img-top rounded"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.text}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Popular;
