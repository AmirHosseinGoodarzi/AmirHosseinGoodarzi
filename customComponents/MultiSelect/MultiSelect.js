//============== React & Next ================
import React, { useEffect, useState, useRef } from "react";
import { ArrowDown, X } from "react-bootstrap-icons";
import styles from "./MultiSelect.module.scss";
//============== images & icons ==============
//============== in Components ===============
//============== ex Components ===============
//================= redux ====================
//============================================
function MultiSelect({
  label,
  placeholder,
  nonSelectedItems,
  selectedItems,
  onAddItem,
  onRemoveItem,
  error,
}) {
  const selectRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);
  const handler = (event) => {
    if (!selectRef.current?.contains(event.target)) {
      setShowDropdown(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);
  return (
    <div className={styles.MultiSelect_wrapper} ref={selectRef}>
      <p className={`${styles.label} ${error ? styles.invalid : ""}`}>
        {label}
      </p>
      <div
        className={`${styles.multi_select_btn} ${error ? styles.invalid : ""}`}
        onClick={() => {
          if (nonSelectedItems.length > 0) {
            setShowDropdown(!showDropdown);
          }
        }}
      >
        {selectedItems?.length > 0 ? (
          <ul>
            {selectedItems.map((item, index) => {
              return (
                <li key={index}>
                  <span className="m-1">{item.icon}</span>
                  <span>{item.title} </span>
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
        ) : placeholder ? (
          <span>{placeholder}</span>
        ) : (
          <span>Select multiple options</span>
        )}
        {nonSelectedItems.length > 0 && (
          <span className="flex">
            <ArrowDown
              className={`${styles.arrow} ${
                showDropdown ? styles.rotate_arrow : ""
              }`}
            />
          </span>
        )}
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <div className={`${styles.content} ${showDropdown ? styles.active : ""}`}>
        <ul className={styles.options}>
          {nonSelectedItems.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  onAddItem(item);
                }}
              >
                <i className="mr-1 mt-1">{item.icon}</i>
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MultiSelect;
