//============== React & Next ================
import React, { useId } from "react";
import styles from "./ToggleSwitch.module.scss";
//============== images & icons ==============
//============== in Components ===============
//============== ex Components ===============
//================= redux ====================
//============================================
function ToggleSwitch(props) {
  let { label, ...otherProps } = props;
  const _id = useId();
  return (
    <div className={styles.ToggleSwitch_wrapper}>
      <label htmlFor={_id}>
        <input type="checkbox" id={_id} className="sr-only peer" {...props} />
        <div className="w-11 h-6 bg-gray-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-main"></div>
        <span>{label}</span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
