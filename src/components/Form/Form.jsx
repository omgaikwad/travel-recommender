import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles["form_wrapper"]}>
      <div className={styles["form_container"]}>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
        />

        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
        />

        <input type="number" id="age" name="age" placeholder="Age" />
      </div>

      <div className={styles["form_container"]}>
        <input
          type="text"
          id="destination"
          name="destination"
          placeholder="destination"
        />

        <input
          type="text"
          id="howoftendoyoutravel"
          name="howoftendoyoutravel"
          placeholder="How often do you travel?"
        />
      </div>

      <button>Search</button>
    </div>
  );
};

export default Form;
