import React from "react";
import SkeletonElement from "./SkeletonElement";

function SkeletonFood() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-food">
        <SkeletonElement type="skeleton-box" />
      </div>
    </div>
  );
}

export default SkeletonFood;
