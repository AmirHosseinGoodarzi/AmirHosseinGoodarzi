//============== React & Next ================
import React, { useState } from "react";
//============== images & icons ==============
//============== in Components ===============
import SelectInput from "../SelectInput/SelectInput";
import FloatingInput from "../FloatingInput/FloatingInput";
import CheckBox from "../CheckBox/CheckBox";
import ComponentViewer from "components/ComponentViewer/ComponentViewer";
import Radio from "customComponents/Radio/Radio";
import ToggleSwitch from "customComponents/ToggleSwitch/ToggleSwitch";
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
  const [toggle, setToggle] = useState(false);
  const finputOnchange = (e) => {
    setFinput({
      ...finput,
      value: e.target.value,
    });
  };
  const [selectedRadio, setSelectedRadio] = useState(0);

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
      {
        id: 1,
        title: "iran",
        icon: <img src="/assets/images/iran.svg" width={"20px"} />,
      },
      {
        id: 2,
        title: "Usa",
        icon: <img src="/assets/images/iran.svg" width={"20px"} />,
      },
      {
        id: 3,
        title: "Germany",
        icon: <img src="/assets/images/iran.svg" width={"20px"} />,
      },
    ]}
    selectedItem={selectedItem}
    setSelectedItem={setSelectedItem}
    showSearchInput={true}
  />`}
        file={"SelectInput"}
      >
        <SelectInput
          label="Country :"
          placeholder="Select Country"
          items={[
            {
              id: 1,
              title: "iran",
              icon: <img src="/assets/images/iran.svg" width={"20px"} />,
            },
            {
              id: 2,
              title: "Usa",
              icon: <img src="/assets/images/iran.svg" width={"20px"} />,
            },
            {
              id: 3,
              title: "Germany",
              icon: <img src="/assets/images/iran.svg" width={"20px"} />,
            },
          ]}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          showSearchInput={true}
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

      <ComponentViewer
        code={`const [toggle, setToggle] = useState(false);
//---------------------------------------            
<ToggleSwitch
  label={"label"}
  checked={toggle}
  onChange={(e) => {
    setToggle(e.target.checked);
  }}
/>`}
        file={"Radio"}
      >
        <ToggleSwitch
          label={"Toggle switch"}
          checked={toggle}
          onChange={(e) => {
            setToggle(e.target.checked);
          }}
        />
      </ComponentViewer>

      <ComponentViewer
        code={`const [selectedRadio, setSelectedRadio] = useState(0);
//---------------------------------------            
<Radio
  name={"RadioButton"}
  items={[
    { label: "Female", value: 0 },
    { label: "Male", value: 1 },
  ]}
  selectedValue={selectedRadio}
  onChange={(value) => {
    setSelectedRadio(value);
  }}
/>`}
        file={"Radio"}
      >
        <Radio
          name={"RadioButton"}
          items={[
            { label: "Female", value: 0 },
            { label: "Male", value: 1 },
          ]}
          selectedValue={selectedRadio}
          onChange={(value) => {
            setSelectedRadio(value);
          }}
        />
      </ComponentViewer>
    </>
  );
}

export default Inputs;
