//============== React & Next ================
import React from "react";
import styles from "./PortfolioCard.module.scss";
//============== images & icons ==============
//============== in components ===============
//============== ex components ===============
//================= redux ====================
//============================================
function PortfolioCard({ item, activeMenu }) {
  return (
    <li
      className={styles.pcard}
      style={{
        backgroundImage: `url('/assets/images/portfolios/${item.title}.png')`,
      }}
      onClick={activeMenu}
    >
      <div className={styles.overlay}>
        <div className={styles.corners}>
          <div className={styles.corner}></div>
          <div className={styles.corner}></div>
          <div className={styles.corner}></div>
          <div className={styles.corner}></div>
        </div>
        <p>{item.title}</p>
      </div>
    </li>
  );
}
export default PortfolioCard;
