//============== React & Next ================
import React from "react";
import styles from "./Button.module.scss";
//============== images & icons ==============
//============== in Components ===============
//============== ex Components ===============
//================= redux ====================
//============================================
function Button(props) {
  const { children, loading, ...otherProps } = props;
  return (
    <div className={styles.Button_wrapper}>
      <div className={styles.Button_container}>
        <button {...otherProps} disabled={loading}>
          {loading ? (
            <div className={styles.button_loading}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          ) : (
            children
          )}
        </button>
      </div>
    </div>
  );
}

export default Button;
