import { Link } from "react-router-dom";

function RestaurantCard(props) {
  return (
    <div className="col-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.image_url} className="card-img-top" alt="ss" />
        <div className="card-body">
          <h5 className="card-title mb-3">{props.title}</h5>
          <Link to={`/restaurant/product/details?recipe_id=${props.recipe_id}`} className="btn btn-primary">
            more details
          </Link>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">publisher: {props.publisher}</small>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
