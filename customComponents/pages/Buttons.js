//============== React & Next ================
import React, { useState } from "react";
//============== images & icons ==============
//============== in Components ===============
import Code from "components/Code/Code";
import Button from "customComponents/Button/Button";
//============== ex Components ===============
//================= redux ====================
//============================================
function Buttons() {
  const [btnLoading, setBtnLoading] = useState(false);
  return (
    <>
      <div className="w-full my-12 flex justify-center items-center">
        <div className="w-1/2 flex justify-center items-center">
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
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Code file={"Button"}>
            {`const [btnLoading, setBtnLoading] = useState(false);
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
          </Code>
        </div>
      </div>
    </>
  );
}

export default Buttons;
