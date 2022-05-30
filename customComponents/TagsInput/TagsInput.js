//============== React & Next ================
import React, { useState, useRef, useId } from "react";
import { X } from "react-bootstrap-icons";
import styles from "./TagsInput.module.scss";
//============== images & icons ==============
//============== in Components ===============
//============== ex Components ===============
//================= redux ====================
//============================================
function TagsInput(props) {
  const _id = useId();
  const {
    error,
    wrapperClassNames,
    label,
    list,
    onAddItem,
    onRemoveItem,
    placeholder,
    ...otherProps
  } = props;
  const [focused, setFocused] = useState(false);
  const inputRef = useRef();
  return (
    <div
      className={`${styles.TagsInput_wrapper} ${
        wrapperClassNames ? wrapperClassNames : ""
      }`}
    >
      <div
        className={`${styles.TagsInput_container} ${
          focused ? styles.focused : ""
        } ${error ? styles.invalid : ""}`}
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        <ul>
          {list?.map((item, index) => {
            return (
              <li key={index}>
                <span>{item}</span>
                <i
                  onClick={() => {
                    onRemoveItem(item);
                  }}
                >
                  <X />
                </i>
              </li>
            );
          })}
        </ul>
        <input
          ref={inputRef}
          id={_id}
          autoComplete="off"
          onFocus={() => {
            setFocused(true);
          }}
          placeholder={list?.length > 0 ? (placeholder ? placeholder : "") : ""}
          onBlur={() => {
            setFocused(false);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onAddItem(e.target.value);
            }
          }}
          {...otherProps}
        />
        <label
          htmlFor={_id}
          className={list?.length > 0 || otherProps.value ? styles.filled : ""}
        >
          {label}
        </label>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default TagsInput;
