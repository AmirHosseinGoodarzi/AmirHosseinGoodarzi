//============== React & Next ================
import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./Components.module.scss";
import { useRouter } from "next/router";
import { List, XLg } from "react-bootstrap-icons";
//============== images & icons ==============
//============== in components ===============
import Inputs from "components/CustomComponents/pages/Inputs";
//============== ex components ===============
//================= redux ====================
//============================================
function Components() {
  const router = useRouter();
  const pagesList = [{ title: "inputs", page: <Inputs /> }];
  const [componentsType, setComponentsType] = useState("");
  const [openSidebar, setOpenSidebar] = useState(true);
  useEffect(() => {
    let type = decodeURIComponent(router.query.type);
    if (router.query.type) {
      findPageComponent(type)
        ? setComponentsType(type)
        : router.push("/Components");
    }
  }, [router.query]);
  const findPageComponent = (type) => {
    let isExist = false;
    let selectedPage = {};
    pagesList.forEach((page) => {
      if (page.title === type) {
        isExist = true;
        selectedPage = page;
        return;
      }
    });
    if (isExist) {
      return selectedPage;
    } else {
      return null;
    }
  };
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
            {pagesList.map((item, index) => {
              return (
                <li
                  className={componentsType === item.title ? styles.active:""}
                  key={index}
                  onClick={() => {
                    router.push(`/Components?type=${item.title}`);
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
              findPageComponent(componentsType) ? (
                findPageComponent(componentsType)?.page
              ) : (
                <></>
              )
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
