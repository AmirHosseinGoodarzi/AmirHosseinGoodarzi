//============== React & Next ================
import React, { useState } from "react";
//============== images & icons ==============
//============== in Components ===============
import SelectInput from "../SelectInput/SelectInput";
import FloatingInput from "../FloatingInput/FloatingInput";
import CheckBox from "../CheckBox/CheckBox";
import ComponentViewer from "components/ComponentViewer/ComponentViewer";
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
      <ComponentViewer
        code={`const [finput, setFinput] = useState({
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
        file={"FloatingInput"}
      >
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
      </ComponentViewer>
      <ComponentViewer
        code={`const [selectedItem, setSelectedItem] = useState({});
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
        file={"SelectInput"}
      >
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
      </ComponentViewer>
      <ComponentViewer
        code={`const [checkbox, setCheckbox] = useState(false);
//---------------------------------------            
<CheckBox
  checked={checkbox}
  onChange={(e) => {
    setCheckbox(e.target.checked);
  }}
/>`}
        file={"CheckBox"}
      >
        <CheckBox
          checked={checkbox}
          onChange={(e) => {
            setCheckbox(e.target.checked);
          }}
        />
      </ComponentViewer>
    </>
  );
}

export default Inputs;
