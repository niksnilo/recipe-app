import React from "react";
import "./SkeletonElement.css";

function SkeletonElement({ type }) {
  const classes = `skeleton ${type}`;
  return (
    <div className={classes}>
      <div className="skeleton-box">
        <div className="skeleton-food-image">
          <div className="food-placeholder rounded-circle mb-5"></div>
        </div>
        <div className="skeleton-food-details">
          <div className="text-placeholder placeholder w-100"></div>
          <div className="text-placeholder placeholder w-100"></div>
          <div className="text-placeholder placeholder w-75"></div>
          <div className="text-placeholder placeholder w-50"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonElement;
