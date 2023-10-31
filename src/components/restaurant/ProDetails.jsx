import React, { useEffect, useState } from "react";
function DetailPage() {
  const [detailsProdct, setDetailProdct] = useState(null);

  let getData = async (urlParams) => {
    let response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${urlParams.get("recipe_id")}`);
    let data = await response.json();
    setDetailProdct(data.recipe);
  };
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    getData(urlParams);
  }, []);
  if (detailsProdct != null) {
    return <Detail {...detailsProdct} />;
  }
  else{
    <h2>loading...</h2>
  }
}
function Detail(props) {
  return (
    <div className="d-flex flex-column row-gap-5 mb-5">
      <h1>{props.title}</h1>
      <img src={props.image_url} alt="s" />
      <div>
        <h2 className="mb-3">ingredients</h2>
        <ul>
          {props.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="d-inline fw-normal">publisher: </h3>
        <span className="fs-3 fw-bold">{props.publisher}</span>
      </div>
      <div>
        <a href={props.source_url} className="btn btn-primary">
          Go to Source URL
        </a>
      </div>
    </div>
  );
}
export default DetailPage;
