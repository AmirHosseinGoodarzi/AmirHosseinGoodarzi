//============== React & Next ================
import React, { useEffect, useState, useRef } from "react";
import { ArrowDown, ArrowUp, Search, XLg } from "react-bootstrap-icons";
import styles from "./SelectInput.module.scss";
//============== images & icons ==============
//============== in Components ===============
//============== ex Components ===============
//================= redux ====================
//============================================
function SelectInput({
  label,
  placeholder,
  items,
  selectedItem,
  setSelectedItem,
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
    <div className={styles.wrapper} ref={selectRef}>
      <p className={styles.label}>{label}</p>
      <div
        className={styles.select_btn}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {selectedItem?.title ? (
          <div className="flex items-center justify-center">
            <i className="mr-1 mt-1">{selectedItem.icon}</i>
            <span>{selectedItem.title} </span>
          </div>
        ) : <span>{placeholder}</span> ? (
          <span>{placeholder}</span>
        ) : (
          <span>Select an option</span>
        )}

        <span className="flex">
          {selectedItem.title && (
            <XLg
              className="mr-2 text-error"
              onClick={() => setSelectedItem("")}
            />
          )}
          <ArrowDown
            className={`${styles.arrow} ${
              showDropdown ? styles.rotate_arrow : ""
            }`}
          />
        </span>
      </div>
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
                    setSelectedItem(item);
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

export default SelectInput;
