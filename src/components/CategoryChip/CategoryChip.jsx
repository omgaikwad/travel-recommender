import React from "react";
import styles from "./CategoryChip.module.css";

const CategoryChip = ({ category, setCategory }) => {
  return (
    <button
      onClick={() => setCategory((prev) => [...prev, "hills"])}
      className={styles["category_chip"]}
    >
      <i className="fas fa-mountain"></i>
      <p>Hill Stations</p>
    </button>
  );
};

export default CategoryChip;
