//============== React & Next ================
import React from "react";
//============== images & icons ==============
import { Download } from "react-bootstrap-icons";
//============== in components ===============
//============== ex components ===============
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { codeTheme } from "./code.style";
import toast from "react-hot-toast";
//================= redux ====================

function Code({ children, file }) {
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
    navigator.clipboard.writeText(children.toString());
    toast.success("Code copied to clipboard!");
  };
  return (
    <div className="relative">
      <button
        className="absolute -right-3 -top-0 bg-main bg-opacity-60 p-2 rounded-md"
        onClick={downloadFile}
      >
        <Download />
      </button>
      <svg
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        className="absolute -right-3 -bottom-0 bg-main bg-opacity-60 rounded-md w-8 h-8 flex justify-center items-center cursor-pointer"
        onClick={copy}
      >
        <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
        <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
      </svg>
      <SyntaxHighlighter showLineNumbers language="jsx" style={codeTheme}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default Code;
