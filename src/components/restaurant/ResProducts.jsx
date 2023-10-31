import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

function resProducts() {
  const [recipes, setRecipes] = useState(null);
  let getData = async (urlParams) => {
    let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${urlParams.get("cat")}`);
    let data = await response.json();
    setRecipes(data.recipes);
  };
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    getData(urlParams);
  }, []);
  return <div className="row row-gap-3">{getRecipes(recipes)}</div>;
}
function getRecipes(recipes) {
  if (recipes == null) {
    return <h2 className="m-auto">loading...</h2>;
  } else {
    {
      return recipes.map((recipe) => <RestaurantCard {...recipe} key={recipe.recipe_id} />);
    }
  }
}
export default resProducts;
