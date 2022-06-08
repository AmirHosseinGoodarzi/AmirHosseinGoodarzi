//============== React & Next ================
import React, { useState } from "react";
//============== images & icons ==============
//============== in Components ===============
import HookViewer from "components/HookViewer/HookViewer";
import Button from "../components/Button/Button";
//============== ex Components ===============
//================= redux ====================
//============================================
function Hooks() {
  const [btnLoading, setBtnLoading] = useState(false);
  return (
    <>
      <HookViewer
        source={`this is source of my first hook`}
        usage={`usage`}
        file={"useNetworkStatus"}
      />
    </>
  );
}

export default Hooks;
