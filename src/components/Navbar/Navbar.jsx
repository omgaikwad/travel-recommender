import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["logo_container"]}>
        <img className={styles["logo"]} src="/assets/logo.png" alt="logo" />
        <p className={styles["brand_name"]}>TripWise AI</p>
      </div>

      <div className={styles["right_container"]}>
        <a className={styles["nav_link"]} href="/">
          Home
        </a>
        <a className={styles["nav_link"]} href="/about">
          About
        </a>
        <a className={styles["nav_link"]} href="/contact">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
