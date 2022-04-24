//============== React & Next ================
import React from "react";
import styles from "./Title.module.scss";
//============== images & icons ==============
//============== in components ===============
//============== ex components ===============
//================= redux ====================

function Title({ back, front }) {
  return (
    <div className={styles.heading}>
      <h1 className={`${styles.titleBack}`}>{back}</h1>
      <h2 className={`${styles.title}`}>
        {front?.normal} <span>{front?.bold}</span>
      </h2>
    </div>
  );
}

export default Title;
