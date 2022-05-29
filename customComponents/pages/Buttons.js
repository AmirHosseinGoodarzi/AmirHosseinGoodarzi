//============== React & Next ================
import React, { useState } from "react";
//============== images & icons ==============
//============== in Components ===============
import ComponentViewer from "components/ComponentViewer/ComponentViewer";
import Button from "customComponents/Button/Button";
//============== ex Components ===============
//================= redux ====================
//============================================
function Buttons() {
  const [btnLoading, setBtnLoading] = useState(false);
  return (
    <>
      <ComponentViewer
        code={`const [btnLoading, setBtnLoading] = useState(false);
//---------------------------------------            
  <Button
    loading={btnLoading}
    onClick={() => {
      setBtnLoading(true);
      setTimeout(() => {
        alert("clicked");
        setBtnLoading(false);
      }, 5000);
    }}
  >
    Click Me
  </Button>`}
        file={"Button"}
      >
        <Button
          loading={btnLoading}
          onClick={() => {
            setBtnLoading(true);
            setTimeout(() => {
              alert("clicked");
              setBtnLoading(false);
            }, 5000);
          }}
        >
          Click Me
        </Button>
      </ComponentViewer>
    </>
  );
}

export default Buttons;
