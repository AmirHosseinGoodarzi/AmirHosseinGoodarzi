//============== React & Next ================
import React, { useState } from "react";
//============== images & icons ==============
//============== in Components ===============
import CustomSelectInput from "../CustomSelectInput/CustomSelectInput";
import Code from "components/Code/Code";
//============== ex Components ===============
//================= redux ====================
//============================================
function Inputs() {
  const [selectedItem, setSelectedItem] = useState({});
  return (
    <>
      <div className="w-full my-12 flex justify-center items-center">
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
          <Code>
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
          </Code>
        </div>
      </div>
    </>
  );
}

export default Inputs;
