//============== React & Next ================
import React from "react";
//============== images & icons ==============
import { Download } from "react-bootstrap-icons";
//============== in components ===============
//============== ex components ===============
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { codeTheme } from "./code.style";
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
  return (
    <div className="relative">
      <button
        href={file}
        className="absolute -right-3 -top-0 bg-main bg-opacity-60 p-2 rounded-md"
        onClick={downloadFile}
      >
        <Download />
      </button>
      <SyntaxHighlighter showLineNumbers language="jsx" style={codeTheme}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export default Code;
