//============== React & Next ================
import React, { useId } from "react";
import styles from "./FloatingInput.module.scss";
//============== images & icons ==============
//============== in Components ===============
//============== ex Components ===============
//================= redux ====================
//============================================
export const inputTypes = Object.freeze({
  NORMAL: "NORMAL",
  BORDERED: "BORDERED",
});
function FloatingInput(props) {
  const _id = useId();
  const { error, label, type, wrapperClassNames, ...otherProps } = props;
  return (
    <div
      className={`${styles.FloatingInput_wrapper} ${
        wrapperClassNames ? wrapperClassNames : ""
      }`}
    >
      <input
        id={_id}
        {...otherProps}
        className={`${error ? styles.invalid : ""} ${
          type === inputTypes.BORDERED ? styles.bordered : ""
        }`}
      />
      <label htmlFor={_id} className={otherProps.value ? styles.focused : ""}>
        {label}
      </label>
      <p className={styles.error}>{error}</p>
    </div>
  );
}

export default FloatingInput;
