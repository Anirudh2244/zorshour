import React, { useState } from "react";
import './index.css';

const ShimmerBorder = ({
  children,
  shimmerStyle = "flip",
  showTrick = false,
  className = "",
}) => {
  const [active, setActive] = useState(false);

  const shimmerBorderClasses = [
    "shimmer-border",
    shimmerStyle === "container" && "shimmer-border--is-container",
    shimmerStyle === "flip" && "shimmer-border--is-flip",
    shimmerStyle === "lazy" && "shimmer-border--is-lazy",
    shimmerStyle === "in-n-out" && "shimmer-border--is-in-n-out",
    showTrick && "shimmer-border--show-trick",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleMouseEnter = (e) => {
    setActive(true);
    e.currentTarget.style.setProperty("--shimmer-color", "rgb(251, 146, 60)");
  };

  const handleMouseLeave = (e) => {
    setActive(false);
    e.currentTarget.style.setProperty("--shimmer-color", "");
  };

  return (
    <button
      className={shimmerBorderClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="spark__container">
        <span className="spark"></span>
      </span>
      <span className="backdrop"></span>
      {children}
    </button>
  );
};

export default ShimmerBorder;
