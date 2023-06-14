import React from "react";

import styles from "./header.module.scss";

import Score from "../Score/Score.jsx";

const Header = () => {
  return (
    <div className={styles.header_wrapper}>
      <h1 className={styles.header_title}>
        Rock
        <br />
        Paper
        <br />
        Scissors
      </h1>
      <Score />
    </div>
  );
};

export default Header;
