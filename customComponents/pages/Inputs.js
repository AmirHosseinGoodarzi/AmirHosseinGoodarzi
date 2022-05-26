//============== React & Next ================
import React, { useState } from "react";
//============== images & icons ==============
//============== in Components ===============
import SelectInput from "../SelectInput/SelectInput";
import FloatingInput from "../FloatingInput/FloatingInput";
import CheckBox from "../CheckBox/CheckBox";
import Code from "components/Code/Code";
//============== ex Components ===============
//================= redux ====================
//============================================
function Inputs() {
  const [selectedItem, setSelectedItem] = useState({});
  const [finput, setFinput] = useState({
    value: "",
    error: "",
  });
  const [checkbox, setCheckbox] = useState(false);
  const finputOnchange = (e) => {
    setFinput({
      ...finput,
      value: e.target.value,
    });
  };
  return (
    <>
      <div className="w-full my-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-center items-center">
          <SelectInput
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
        <div className="flex justify-center items-center">
          <Code file={"SelectInput"}>
            {`const [selectedItem, setSelectedItem] = useState({});
//---------------------------------------            
<SelectInput
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
        <div className="flex justify-center items-center">
          <Code file={"FloatingInput"}>
            {`const [finput, setFinput] = useState({
    value: "",
    error: "",
  });
//---------------------------------------
const finputOnchange = (e) => {
    setFinput({
      ...finput,
      value: e.target.value,
    });
  };
//---------------------------------------
<FloatingInput
  label="Name"
  placeholder="Enter your name"
  wrapperClassNames=""
  value={finput.value}
  error={finput.error}
  onChange={finputOnchange}
/>`}
          </Code>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            className="p-2 m-5 bg-main text-dark rounded-md font-bold"
            onClick={() => {
              setFinput({
                ...finput,
                error: finput.error ? "" : "test error message",
              });
            }}
          >
            {finput.error ? "see normal style" : "see error style"}
          </button>
          <div className="flex justify-center items-center">
            <FloatingInput
              label="Name"
              placeholder="Enter your name"
              wrapperClassNames=""
              value={finput.value}
              error={finput.error}
              onChange={finputOnchange}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <CheckBox
            checked={checkbox}
            onChange={(e) => {
              setCheckbox(e.target.checked);
            }}
          />
        </div>
        <div className="flex justify-center items-center">
          <Code file={"CheckBox"}>
            {`const [checkbox, setCheckbox] = useState(false);
//---------------------------------------            
<CheckBox
  checked={checkbox}
  onChange={(e) => {
    setCheckbox(e.target.checked);
  }}
/>`}
          </Code>
        </div>
      </div>
    </>
  );
}

export default Inputs;
