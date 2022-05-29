//============== React & Next ================
import React, { useId } from "react";
import styles from "./Radio.module.scss";
//============== images & icons ==============
//============== in Components ===============
//============== ex Components ===============
//================= redux ====================
//============================================
function Radio({ name, items, selectedValue, onChange }) {
  const _id = useId();
  return (
    <div className={styles.Radio_wrapper}>
      {items?.map((item, index) => {
        return (
          <div onClick={()=>{onChange(item.value)}}>
            <span>{item.label}</span>
            <input
              type="radio"
              id={`${item.label}${_id}`}
              name={name}
              className={styles.radio_input}
              value={item.value}
              checked={item.value === selectedValue}
            />
            <label htmlFor={`${item}${_id}`} class={styles.radio}></label>
          </div>
        );
      })}
    </div>
  );
}

export default Radio;
