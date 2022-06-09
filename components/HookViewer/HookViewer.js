//============== React & Next ================
import React, { useEffect, useState } from "react";
import styles from "../ComponentViewer/ComponentViewer.module.scss";
//============== images & icons ==============
import { CodeSlash, Eye } from "react-bootstrap-icons";
//============== in components ===============
//============== ex components ===============
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { theme } from "../ComponentViewer/SyntaxHighlighter.style";
import toast from "react-hot-toast";
//================= redux ====================

const TABS = Object.freeze({
  SOURCE: "SOURCE",
  PREVIEW: "PREVIEW",
});
const baseUrl =
  "https://raw.githubusercontent.com/AmirHosseinGoodarzi/AmirHosseinGoodarzi/main/customs/hooks/";

function HookViewer({ source, usage, file, description, children }) {
  const [activeTab, setActiveTab] = useState(TABS.PREVIEW);
  const [sourceCode, setSourceCode] = useState("");
  const copySource = () => {
    navigator.clipboard.writeText(source);
    toast.success("Source copied to clipboard!");
  };
  const copyUsage = () => {
    navigator.clipboard.writeText(usage);
    toast.success("Hook Usage copied to clipboard!");
  };
  const readSourceCode = () => {
    fetch(`${baseUrl}${file}.js`).then((response) => {
      response.text().then((text) => {
        setSourceCode(text);
      });
    });
  };
  useEffect(() => {
    readSourceCode();
  }, []);

  return (
    <div className={styles.hookViewer_wrapper}>
      <ul className={styles.tab_list}>
        <div>
          <h1 className="text-2xl text-main mb-3">{file}</h1>
        </div>
        <li
          className={activeTab === TABS.PREVIEW ? styles.active : ""}
          onClick={() => {
            setActiveTab(TABS.PREVIEW);
          }}
        >
          <Eye className="mr-1" />
          <span>Preview</span>
        </li>
        <li
          className={activeTab === TABS.SOURCE ? styles.active : ""}
          onClick={() => {
            setActiveTab(TABS.SOURCE);
          }}
        >
          <CodeSlash className="mr-1" />
          <span>Source</span>
        </li>
      </ul>
      <div className={styles.content_wrapper}>
        <div className={styles.code_wrapper}>
          <div className={styles.tools}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className={styles.copy_btn}
              onClick={activeTab === TABS.SOURCE ? copySource : copyUsage}
            >
              <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
              <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
            </svg>
          </div>
          <div className="relative w-full">
            {activeTab === TABS.PREVIEW ? (
              <div className="flex flex-wrap justify-center items-center">
                <div className="w-full lg:w-1/2 my-5 lg:my-0 p-0 lg:pr-4">
                  Description : {description}
                  <hr className="my-3" />
                  {children}
                </div>
                <div className="w-full lg:w-1/2">
                  <SyntaxHighlighter
                    showLineNumbers
                    language="jsx"
                    style={theme}
                  >
                    {usage}
                  </SyntaxHighlighter>
                </div>
              </div>
            ) : (
              <SyntaxHighlighter showLineNumbers language="jsx" style={theme}>
                {sourceCode}
              </SyntaxHighlighter>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HookViewer;
