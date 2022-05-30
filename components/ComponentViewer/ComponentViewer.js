//============== React & Next ================
import React, { useState } from "react";
import styles from "./ComponentViewer.module.scss";
//============== images & icons ==============
import { Activity, CodeSlash, Download } from "react-bootstrap-icons";
//============== in components ===============
//============== ex components ===============
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { theme } from "./SyntaxHighlighter.style";
import toast from "react-hot-toast";
//================= redux ====================

function ComponentViewer({ children, file, code }) {
  const [showCode, setShowCode] = useState(false);
  const downloadFile = () => {
    const baseUrl =
      "https://raw.githubusercontent.com/AmirHosseinGoodarzi/AmirHosseinGoodarzi/main/customComponents/";
    fetch(baseUrl + `${file}/${file}.js`, { method: "GET" })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${file}.js`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
    fetch(baseUrl + `${file}/${file}.module.scss`, { method: "GET" })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${file}.module.scss`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };
  const copy = () => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };
  return (
    <div className={styles.componentViewer_wrapper}>
      <ul className={styles.tab_list}>
        <li
          className={showCode ? "" : styles.active}
          onClick={() => {
            setShowCode(false);
          }}
        >
          <Activity className="mr-1" />
          <span>Preview</span>
        </li>
        <li
          className={showCode ? styles.active : ""}
          onClick={() => {
            setShowCode(true);
          }}
        >
          <CodeSlash className="mr-1" />
          <span>Code</span>
        </li>
      </ul>
      <div className={styles.content_wrapper}>
        {showCode ? (
          <div className={styles.code_wrapper}>
            <div className={styles.tools}>
              <button className={styles.download_btn} onClick={downloadFile}>
                <Download />
              </button>
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={styles.copy_btn}
                onClick={copy}
              >
                <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
                <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
              </svg>
            </div>
            <div className="relative w-full">
              <SyntaxHighlighter showLineNumbers language="jsx" style={theme}>
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

export default ComponentViewer;
