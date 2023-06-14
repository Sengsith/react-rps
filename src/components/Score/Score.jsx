import React from "react";

import styles from "./score.module.scss";

const Score = () => {
  return (
    <div className={styles.score_wrapper}>
      <h4 className={styles.score_title}>Score</h4>
      <div className={styles.score_counter}>0</div>
    </div>
  );
};

export default Score;
