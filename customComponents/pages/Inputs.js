//============== React & Next ================
import React, { useState } from "react";
//============== images & icons ==============
//============== in Components ===============
import SelectInput from "../SelectInput/SelectInput";
import FloatingInput, { inputTypes } from "../FloatingInput/FloatingInput";
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
          <Code>
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
          <Code>
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
  placeholder=""
  wrapperClassNames=""
  type={inputTypes.NORMAL} // import {types}
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
              placeholder=""
              wrapperClassNames=""
              type={inputTypes.NORMAL}
              value={finput.value}
              error={finput.error}
              onChange={finputOnchange}
            />
            <FloatingInput
              label="Name"
              type={inputTypes.BORDERED}
              value={finput.value}
              error={finput.error}
              onChange={finputOnchange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Inputs;
