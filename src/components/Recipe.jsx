import React, { Fragment } from "react";
//import Ingredients from "./Ingredients";
import "./Recipe.css";

function Recipe(props) {
  return (
    <div>
      <div className="food-image">
        <img src={props.image} alt=""></img>
      </div>
      <div className="food-details">
        <div className="food-content">
          <h5>{props.title}</h5>
        </div>
        <h6>Source: {props.source}</h6>
        {/* <Fragment>
          <MDBBtn
            style={btnstyle}
            href={props.url}
            target="_blank"
            className="btn btn-sm ml-0"
          >
            View Recipe
          </MDBBtn>
        </Fragment> */}
        <a
          href={props.url}
          target="_blank"
          className="btn btn-sm ml-0 btn-view-recipe"
        >
          View Recipe
        </a>
      </div>
    </div>
  );
}

export default Recipe;
