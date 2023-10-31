import React from "react";

function ProductCard(props) {
  return (
    <div className="col-3">
      <div className="card" style={{ width: "18rem"  }}>
        <img src={props.image} className="card-img-top" alt="ss" />
        <div className="card-body">
          <h5 className="card-title mb-3">{props.title}</h5>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
