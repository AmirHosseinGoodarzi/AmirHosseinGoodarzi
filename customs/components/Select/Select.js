//============== React & Next ================
import React, { useEffect, useState, useRef } from "react";
import { ArrowDown, Search, XLg } from "react-bootstrap-icons";
import styles from "./Select.module.scss";
//============== images & icons ==============
//============== in Components ===============
//============== ex Components ===============
//================= redux ====================
//============================================
function Select({
  label,
  placeholder,
  items,
  selectedItem,
  error,
  onAddItem,
  onRemoveItem,
  showSearchInput,
}) {
  const selectRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const handler = (event) => {
    if (!selectRef.current?.contains(event.target)) {
      setShowDropdown(false);
      setSearchValue("");
    }
  };
  useEffect(() => {
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);
  return (
    <div className={styles.Select_wrapper} ref={selectRef}>
      <p className={`${styles.label} ${error ? styles.invalid : ""}`}>
        {label}
      </p>
      <div
        className={`${styles.select_btn} ${error ? styles.invalid : ""}`}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {selectedItem?.title ? (
          <div className="flex items-center justify-center">
            <i className="mr-1 mt-1">{selectedItem.icon}</i>
            <span>{selectedItem.title} </span>
          </div>
        ) : placeholder ? (
          <span>{placeholder}</span>
        ) : (
          <span>Select an option</span>
        )}

        <span className="flex">
          {selectedItem.title && (
            <XLg className="mr-2 text-error" onClick={onRemoveItem} />
          )}
          <ArrowDown
            className={`${styles.arrow} ${
              showDropdown ? styles.rotate_arrow : ""
            }`}
          />
        </span>
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <div className={`${styles.content} ${showDropdown ? styles.active : ""}`}>
        {showSearchInput && (
          <div className={styles.search}>
            <Search className={styles.search_icon} />
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        )}
        <ul className={styles.options}>
          {items
            ?.filter((item) =>
              item.title
                .toLocaleLowerCase()
                .includes(searchValue.toLocaleLowerCase())
            )
            .map((item, index) => {
              return (
                <li
                  key={index}
                  className={selectedItem.id === item.id ? styles.active : ""}
                  onClick={() => {
                    onAddItem(item);
                    setShowDropdown(false);
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

export default Select;
