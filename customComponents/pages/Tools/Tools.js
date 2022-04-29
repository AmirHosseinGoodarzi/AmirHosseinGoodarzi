//============== React & Next ================
import React, { useState } from "react";
import styles from "./Tools.module.scss";
//============== images & icons ==============
//============== in Components ===============
import Installation from "./Installation/Installation";
import { DashSquare, List, PlusSquare } from "react-bootstrap-icons";
//============== ex Components ===============
//================= redux ====================
//============================================
function Tools() {
  const REACT_LIBS = [
    { title: "sass", command: "sass" },
    { title: "redux", command: "react-redux @reduxjs/toolkit" },
    { title: "react-query", command: "react-query" },
    { title: "alert", command: "sweetalert2" },
    { title: "api", command: "axios" },
    { title: "validation", command: "validator" },
    { title: "navigation", command: "react-router-dom" },
    { title: "icons", command: "react-bootstrap-icons" },
    { title: "tailwind", command: "tailwindcss postcss autoprefixer --dev" },
    { title: "toast", command: "react-hot-toast" },
    {
      title: "calendar & date time picker",
      command: "react-multi-date-picker",
    },
    { title: "slider", command: "swiper" },
  ];
  const REACTNATIVE_LIBS = [
    { title: "elements", command: "react-native-elements" },
    { title: "bottom sheet", command: "react-native-gesture-bottom-sheet" },
    {
      title: "skeleton",
      command:
        "@react-native-masked-view/masked-view react-native-linear-gradient react-native-skeleton-placeholder",
    },
    { title: "toast", command: "react-native-toast-message" },
    { title: "validation", command: "validator" },
    { title: "tailwind", command: "twrnc" },
    { title: "api", command: "axios" },
    { title: "redux", command: "react-redux @reduxjs/toolkit" },
    {
      title: "navigation",
      command:
        "react-native-screens react-native-safe-area-context @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs",
    },
    { title: "image picker", command: "react-native-image-crop-picker" },
    { title: "icon", command: "react-native-vector-icons" },
    { title: "netinfo", command: "@react-native-community/netinfo" },
    {
      title: "slider",
      command: "@react-native-community/slider react-native-snap-carousel",
    },
    {
      title: "google-signin",
      command: "@react-native-google-signin/google-signin",
    },
  ];
  const CHROME = [
    "Allow CORS: Access-Control-Allow-Origin",
    "Blackbox",
    "ColorZilla",
    "GoFullPage",
    "React Developer Tools",
    "JSON Viewer Pro",
    "SetupVPN",
    "Wappalyzer",
    "What Font",
  ];
  const VSCODE = [
    "Beautify",
    "Es7 + React/Redux",
    "Code Runner",
    "Html Css Support",
    "Html Snippet",
    "HTML to CSS autocompletion",
    "HTML to CSS autocompletion",
    "npm",
    "npm Intellisense",
    "PHP Intelephense",
    "Polacode",
    "Prettier - Code formatter",
    "Python",
    "Pylance",
    "Tailwind CSS IntelliSense",
    "XML Tools",
    "ESLint",
  ];
  const [accordions, setAccordions] = useState({
    react: false,
    react_native: false,
    crhome: false,
    vscode: false,
  });
  return (
    <>
      <div className="w-full p-3">
        <div className={styles.box_container}>
          <div className={styles.header}>
            <h3>Libraries</h3>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-full lg:w-1/2 p-3">
              <div className={styles.box_container}>
                <div className={styles.header}>
                  <h3>React & Next</h3>
                  <span
                    className="absolute right-4 top-6 cursor-pointer"
                    onClick={() => {
                      setAccordions({
                        ...accordions,
                        react: !accordions.react,
                      });
                    }}
                  >
                    {accordions.react ? (
                      <DashSquare size="1.5rem" />
                    ) : (
                      <PlusSquare size="1.5rem" />
                    )}
                  </span>
                </div>
                {accordions.react && (
                  <div className={styles.content}>
                    <ul>
                      {REACT_LIBS.map((item, index) => {
                        return (
                          <Installation
                            key={index}
                            title={item.title}
                            command={item.command}
                          />
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-3">
              <div className={styles.box_container}>
                <div className={styles.header}>
                  <h3>React Native</h3>
                  <span
                    className="absolute right-4 top-6 cursor-pointer"
                    onClick={() => {
                      setAccordions({
                        ...accordions,
                        react_native: !accordions.react_native,
                      });
                    }}
                  >
                    {accordions.react_native ? (
                      <DashSquare size="1.5rem" />
                    ) : (
                      <PlusSquare size="1.5rem" />
                    )}
                  </span>
                </div>
                {accordions.react_native && (
                  <div className={styles.content}>
                    <ul>
                      {REACTNATIVE_LIBS.map((item, index) => {
                        return (
                          <Installation
                            key={index}
                            title={item.title}
                            command={item.command}
                          />
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap">
        <div className="w-full lg:w-1/2 p-3">
          <div className={styles.box_container}>
            <div className={styles.header}>
              <h3>Chrome Extensions</h3>
              <span
                className="absolute right-4 top-6 cursor-pointer"
                onClick={() => {
                  setAccordions({
                    ...accordions,
                    crhome: !accordions.crhome,
                  });
                }}
              >
                {accordions.crhome ? (
                  <DashSquare size="1.5rem" />
                ) : (
                  <PlusSquare size="1.5rem" />
                )}
              </span>
            </div>
            {accordions.crhome && (
              <div className={`flex flex-wrap ${styles.content}`}>
                {CHROME.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="m-2 p-3 w-fit shadow-lg"
                      style={{ backgroundColor: "var(--dark2)" }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-3">
          <div className={styles.box_container}>
            <div className={styles.header}>
              <h3>Vscode Extensions</h3>
              <span
                className="absolute right-4 top-6 cursor-pointer"
                onClick={() => {
                  setAccordions({
                    ...accordions,
                    vscode: !accordions.vscode,
                  });
                }}
              >
                {accordions.vscode ? (
                  <DashSquare size="1.5rem" />
                ) : (
                  <PlusSquare size="1.5rem" />
                )}
              </span>
            </div>
            {accordions.vscode && (
              <div className={`flex flex-wrap ${styles.content}`}>
                {VSCODE.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="m-2 p-3 w-fit shadow-lg"
                      style={{ backgroundColor: "var(--dark2)" }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tools;
