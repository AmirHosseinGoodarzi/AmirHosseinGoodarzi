//============== React & Next ================
import React, { useState } from "react";
//============== images & icons ==============
//============== in Components ===============
import Code from "components/Code/Code";
//============== ex Components ===============
//================= redux ====================
//============================================
function Buttons() {
  const [selectedItem, setSelectedItem] = useState({});
  return (
    <>
      <div className="w-full my-12 flex justify-center items-center">
        <div className="w-1/2 flex justify-center items-center">

        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Code>
            {``}
          </Code>
        </div>
      </div>
    </>
  );
}

export default Buttons;
