//============== React & Next ================
import React, { useState } from "react";
//============== images & icons ==============
//============== in Components ===============
import ComponentsPageLayout from "layouts/ComponentsPageLayout/ComponentsPageLayout";
import ComponentViewer from "components/ComponentViewer/ComponentViewer";
import Button from "customs/components/Button/Button";
//============== ex Components ===============
//================= redux ====================
//============================================
function Buttons() {
  const [btnLoading, setBtnLoading] = useState(false);
  return (
    <ComponentsPageLayout>
      <ComponentViewer
        usage={`const [btnLoading, setBtnLoading] = useState(false);
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
    </ComponentsPageLayout>
  );
}

export default Buttons;
