import React from "react";
import carrotImg from "../../img/carrot.jpg";
import cornImg from "../../img/corn.jpg";
import pizzaImg from "../../img/pizza.jpg";
import potatoImg from "../../img/potato.jpg";
import tomatoImg from "../../img/tomato.jpg";
import { Link } from "react-router-dom";

function Restaurant() {
  const cats = ["pizza", "carrot", "corn", "potato", "tomato"];
  const catsImg = [pizzaImg, carrotImg, cornImg, potatoImg, tomatoImg];
  return (
    <div className="text-center">
      <div className="row row-gap-4 py-5">
        {cats.map((cat, index) => {
          return catCard(cat, catsImg[index], index);
        })}
      </div>
    </div>
  );
}
function catCard(title, img, index) {
  return (
    <Link to={`/restaurant/product?cat=${title}`} className="col-3" key={index}>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="ss" />
        <div className="card-body">
          <h5 className="card-title mb-3">{title}</h5>
        </div>
      </div>
    </Link>
  );
}
export default Restaurant;
