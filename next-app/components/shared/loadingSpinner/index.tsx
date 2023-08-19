import React from "react";
import PropTypes from "prop-types";
import styles from "./loadingSpinner.module.scss";

interface LoadingSpinnerProps {
  size?: string | number;
  color?: string;
}

export default function LoadingSpinner({
  size = "40px",
  color = "#007bff",
}: LoadingSpinnerProps) {
  const loaderStyle = {
    width: size,
    height: size,
    borderTopColor: color,
  };

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loading} style={loaderStyle}></div>
    </div>
  );
}
