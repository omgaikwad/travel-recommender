import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["nav_left_container"]}>
        <div className={styles["nav_logo_container"]}>TripWise AI</div>
      </div>

      <div className={styles["nav_right_container"]}>
        <div className={styles["nav_right_item"]}>Home</div>
        <div className={styles["nav_right_item"]}>About</div>
        <div className={styles["nav_right_item"]}>Contact</div>
      </div>
    </nav>
  );
};

export default Navbar;
