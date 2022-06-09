//============== React & Next ================
import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
//============== images & icons ==============
import { List, XLg } from "react-bootstrap-icons";
//============== in components ===============
import NavLink from "./NavLink";
import { NavList } from "./NavList";
//============== ex components ===============
//================= redux ====================
//============================================
function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={styles.desktop}
        style={
          router.pathname === "/Components"
            ? { backgroundColor: "var(--dark2)" }
            : router.pathname === "/ContactMe"
            ? { backgroundColor: "transparent" }
            : {}
        }
      >
        <h4 className={styles.brand}>
          <img
            src="/assets/images/logo.png"
            alt="logo"
            width="40px"
            height="auto"
          />
          mir<small>Hossein</small>Goodarzi
        </h4>
        <ul className="flex justify-center items-center list-none p-0 m-0">
          {NavList.map((navItem, index) => {
            return (
              <NavLink name={navItem} pathname={router.pathname} key={index} />
            );
          })}
        </ul>
        <span
          className={styles.navOptions}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <XLg size="2em" color={"#FFF"} />
          ) : (
            <List size="2em" color={"#FFF"} />
          )}
        </span>
      </div>
      <div
        className={`${styles.mobile} ${isOpen ? styles.mobileMenuActive : ""}`}
        style={
          router.pathname === "/Components"
            ? { backgroundColor: "var(--dark2)" }
            : {}
        }
      >
        <ul className="flex flex-col justify-center items-center list-none h-full p-0 m-0">
          {NavList.map((navItem, index) => {
            return (
              <NavLink
                name={
                  navItem === "Components" ? navItem + "?type=Inputs" : navItem
                }
                pathname={router.pathname}
                key={index}
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
