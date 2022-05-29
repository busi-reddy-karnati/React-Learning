import React from "react";

const OneCard = ({ src_image, card_title, card_txt }) => (
  <div className="col-4">
    <div className="card" style={{ width: "18rem" }}>
      <img src={src_image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{card_title}</h5>
        <p className="card-text">{card_txt}</p>
        <button className="btn btn-success">Go somewhere</button>
      </div>
    </div>
  </div>
);

export default OneCard;
