import React from "react";
import Recipe from "./Recipe";
import "./Card.css";

function Card(props) {
  return (
    <div className="row">
      {props.recipes.map((recipe, index) => (
        <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
          <div className="box h-100">
            <Recipe
              id={index}
              key={index}
              title={recipe.recipe.label}
              url={recipe.recipe.url}
              source={recipe.recipe.source}
              image={recipe.recipe.image}
              // ingredients={recipe.recipe.ingredients}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
