//============== React & Next ================
import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./ComponentsPageLayout.module.scss";
import { useRouter } from "next/router";
import { List, XLg } from "react-bootstrap-icons";
//============== images & icons ==============
//============== in components ===============
//============== ex components ===============
//================= redux ====================
//============================================
import { ComponentsPagesList } from "./ComponentsPagesList";
function ComponentsPageLayout({ children }) {
  const router = useRouter();
  const [selectedPage, setSelectedPage] = useState("");
  const [openSidebar, setOpenSidebar] = useState(true);
  useEffect(() => {
    setSelectedPage(router.route?.toLowerCase().replace("/components", ""));
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
            {ComponentsPagesList.map((item, index) => {
              return (
                <li
                  className={
                    selectedPage === item.page.toLowerCase()
                      ? styles.active
                      : ""
                  }
                  key={index}
                  onClick={() => {
                    router.push(`/Components${item.page}`);
                  }}
                >
                  {item.title}
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
          <button
            className={styles.toggle_sidebar}
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            {openSidebar ? <XLg /> : <List />}
          </button>
          <div className="flex flex-col items-center justify-center w-full">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponentsPageLayout;
