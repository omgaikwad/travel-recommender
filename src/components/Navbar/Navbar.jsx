import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["logo_container"]}>
        <img className={styles["logo"]} src="/assets/logo.png" alt="logo" />
        <p className={styles["brand_name"]}>TripWise AI</p>
      </div>
    </nav>
  );
};

export default Navbar;
