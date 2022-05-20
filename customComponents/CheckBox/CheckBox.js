//============== React & Next ================
import React, { useId } from "react";
import styles from "./CheckBox.module.scss";
//============== images & icons ==============
//============== in Components ===============
//============== ex Components ===============
//================= redux ====================
//============================================
function CheckBox(props) {
  const _id = useId();
  return (
    <div className={styles.CheckBox_wrapper}>
      <input
        id={_id}
        type="checkbox"
        {...props}
      />
      <label htmlFor={_id}></label>
    </div>
  );
}

export default CheckBox;
