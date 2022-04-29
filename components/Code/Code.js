//============== React & Next ================
import React from "react";
//============== images & icons ==============
//============== in components ===============
//============== ex components ===============
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { codeTheme } from "./code.style";
//================= redux ====================

function Title({ children }) {
  return (
    <SyntaxHighlighter showLineNumbers language="jsx" style={codeTheme}>
      {children}
    </SyntaxHighlighter>
  );
}

export default Title;
