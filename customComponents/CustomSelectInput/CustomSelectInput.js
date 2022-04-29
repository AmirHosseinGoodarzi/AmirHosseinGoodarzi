//============== React & Next ================
import React, { useEffect, useState, useRef } from "react";
import { ArrowDown, ArrowUp, Search, XLg } from "react-bootstrap-icons";
import styles from "./CustomSelectInput.module.scss";
//============== images & icons ==============
//============== in Components ===============
//============== ex Components ===============
//================= redux ====================
//============================================
function CustomSelectInput({
  label,
  placeholder,
  items,
  selectedItem,
  setSelectedItem,
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
        <span>
          {selectedItem?.title
            ? selectedItem?.title
            : placeholder
            ? placeholder
            : "Select an option"}
        </span>
        <span className="flex">
          {selectedItem.title && (
            <XLg
              className="mr-2 text-error"
              onClick={() => setSelectedItem("")}
            />
          )}
          {showDropdown ? <ArrowUp /> : <ArrowDown />}
        </span>
      </div>
      <div className={`${styles.content} ${showDropdown ? styles.active : ""}`}>
        <div className={styles.search}>
          <Search className={styles.search_icon} />
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
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
                  <span>{item.title}</span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default CustomSelectInput;
