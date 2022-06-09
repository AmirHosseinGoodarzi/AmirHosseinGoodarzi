//============== React & Next ================
import React, { useId } from "react";
import styles from "./FloatingInput.module.scss";
//============== images & icons ==============
//============== in Components ===============
//============== ex Components ===============
//================= redux ====================
//============================================
function FloatingInput(props) {
  const _id = useId();
  const { error, label, wrapperClassNames,className, ...otherProps } = props;
  return (
    <div className={`${styles.FloatingInput_wrapper} ${wrapperClassNames ? wrapperClassNames : ""}`}>
      <input
        id={_id}
        {...otherProps}
        autoComplete="off"
        className={`${error ? styles.invalid : ""} ${className?className:""}`}
      />
      <label htmlFor={_id} className={otherProps.value ? styles.filled : ""}>
        {label}
      </label>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default FloatingInput;
