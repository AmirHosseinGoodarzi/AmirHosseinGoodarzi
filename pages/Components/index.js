//============== React & Next ================
import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./Components.module.scss";
import { useRouter } from "next/router";
import { List, XLg } from "react-bootstrap-icons";
//============== images & icons ==============
//============== in components ===============
//============== ex components ===============
//================= redux ====================
//============================================
function Components() {
  const list = [
    "Accordion",
    "Alerts",
    "Badge",
    "Breadcrumb",
    "Buttons",
    "Button group",
    "Card",
    "Carousel_Slider",
    "List group",
    "Modal",
    "Navs_tabs",
    "Navbar",
    "Offcanvas",
    "Pagination",
    "Placeholders",
    "Popovers",
    "Progress",
    "Scrollspy",
    "Spinners",
    "Toasts",
    "Tooltips",
  ];
  const [componentsType, setComponentsType] = useState("");
  const [openSidebar, setOpenSidebar] = useState(true);
  const router = useRouter();
  useEffect(() => {
    let type = decodeURIComponent(router.query.type);
    if (router.query.type) {
      if (list.includes(type)) {
        setComponentsType(type);
      } else {
        router.push("/Components");
      }
    }
  }, [router.query]);

  return (
    <>
      <Head>
        <title>Components</title>
      </Head>
      <div className={styles.wrapper}>
        <div
          className={`${styles.side_bar} ${openSidebar ? styles.active : ""}`}
        >
          <ul>
            {list.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    router.push(`/Components?type=${item}`);
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={`${styles.content} ${
            openSidebar ? "" : styles.sidebar_closed
          }`}
        >
          <div className={styles.header}>
            <button
              className={styles.toggle_sidebar}
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              {openSidebar ? <XLg /> : <List />}
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-center">
              {componentsType
                ? componentsType
                : "Please select an option from Menu"}
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            {componentsType ? (
              componentsType
            ) : (
              <img
                src="/assets/images/Empty.svg"
                className="mt-32"
                alt="Empty"
                width="40%"
                height="auto"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Components;
