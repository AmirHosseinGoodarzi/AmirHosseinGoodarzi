//============== React & Next ================
import React, { useState } from "react";
import styles from "./HookViewer.module.scss";
//============== images & icons ==============
import { Activity, CodeSlash, Download } from "react-bootstrap-icons";
//============== in components ===============
//============== ex components ===============
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { theme } from "../ComponentViewer/SyntaxHighlighter.style";
import toast from "react-hot-toast";
//================= redux ====================

function HookViewer({ source, usage, file }) {
  const [showSource, setShowSource] = useState(false);
  const downloadFile = () => {
    const baseUrl =
      "https://raw.githubusercontent.com/AmirHosseinGoodarzi/AmirHosseinGoodarzi/main/customs/hooks/";
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
  const copySource = () => {
    navigator.clipboard.writeText(source);
    toast.success("Source copied to clipboard!");
  };
  const copyUsage = () => {
    navigator.clipboard.writeText(usage);
    toast.success("Hook Usage copied to clipboard!");
  };
  return (
    <div className={styles.componentViewer_wrapper}>
      <ul className={styles.tab_list}>
        <li
          className={showSource ? "" : styles.active}
          onClick={() => {
            setShowSource(false);
          }}
        >
          <Activity className="mr-1" />
          <span>Usage</span>
        </li>
        <li
          className={showSource ? styles.active : ""}
          onClick={() => {
            setShowSource(true);
          }}
        >
          <CodeSlash className="mr-1" />
          <span>Source</span>
        </li>
      </ul>
      <div className={styles.content_wrapper}>
        <div className={styles.code_wrapper}>
          <div className={styles.tools}>
            {setShowSource && (
              <button className={styles.download_btn} onClick={downloadFile}>
                <Download />
              </button>
            )}
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className={styles.copy_btn}
              onClick={showSource ? copySource : copyUsage}
            >
              <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
              <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
            </svg>
          </div>
          <div className="relative w-full">
            <SyntaxHighlighter showLineNumbers language="jsx" style={theme}>
              {showSource ? source : usage}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HookViewer;
