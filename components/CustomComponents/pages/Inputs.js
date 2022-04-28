//============== React & Next ================
import React, { useState } from "react";
//============== images & icons ==============
//============== in Components ===============
import CustomSelectInput from "../CustomSelectInput/CustomSelectInput";
//============== ex Components ===============
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';

// import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
// import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
//================= redux ====================
//============================================
function Inputs() {
  const [selectedItem, setSelectedItem] = useState({});
  return (
    <div className="w-full py-20 flex justify-center items-center">
      <div className="w-1/2 flex justify-center items-center">
        <CustomSelectInput
          label="Country :"
          placeholder="Select Country"
          items={[
            { id: 1, title: "iran" },
            { id: 2, title: "Usa" },
            { id: 3, title: "Germany" },
          ]}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <SyntaxHighlighter showLineNumbers language="jsx" /* style={atomDark}*/>
          {`<CustomSelectInput
  label="Country :"
  placeholder="Select Country"
  items={[
    { id: 1, title: "iran" },
    { id: 2, title: "Usa" },
    { id: 3, title: "Germany" },
  ]}
  selectedItem={selectedItem}
  setSelectedItem={setSelectedItem}
/>`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default Inputs;
