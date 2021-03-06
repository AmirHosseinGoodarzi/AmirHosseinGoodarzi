//============== React & Next ================
import React, { useState } from "react";
//============== images & icons ==============
//============== in Components ===============
import ComponentsPageLayout from "layouts/ComponentsPageLayout/ComponentsPageLayout";
import ComponentViewer from "components/ComponentViewer/ComponentViewer";

import Select from "customs/components/Select/Select";
import FloatingInput from "customs/components/FloatingInput/FloatingInput";
import CheckBox from "customs/components/CheckBox/CheckBox";
import Radio from "customs/components/Radio/Radio";
import ToggleSwitch from "customs/components/ToggleSwitch/ToggleSwitch";
import TagsInput from "customs/components/TagsInput/TagsInput";
import MultiSelect from "customs/components/MultiSelect/MultiSelect";
//============== ex Components ===============
//================= redux ====================
//============================================
function Inputs() {
  const [select, setSelect] = useState({
    selectedItem: {},
    items: [
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
    ],
    error: "",
  });
  const [multipleSelect, setMultipleSelect] = useState({
    selectedItems: [],
    nonSelectedItems: [
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
    ],
    error: "",
  });
  const [finput, setFinput] = useState({
    value: "",
    error: "",
  });
  const [tagsInput, setTagsInput] = useState({
    data: [],
    value: "",
    error: "",
  });
  const [checkbox, setCheckbox] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(0);

  return (
    <ComponentsPageLayout>
      <ComponentViewer
        usage={`const [finput, setFinput] = useState({
    value: "",
    error: "",
  });
//---------------------------------------
  <FloatingInput
    label="Name"
    placeholder="Enter your name"
    wrapperClassNames=""
    value={finput.value}
    error={finput.error}
    onChange={(e) => {
      setFinput({
        ...finput,
        value: e.target.value,
      });
    }}
    required={true}
  />`}
        file={"FloatingInput"}
      >
        <div className="flex flex-col justify-center items-center relative w-full">
          <button
            className="p-2 m-5 bg-main text-dark rounded-md font-bold absolute -top-7 -right-7"
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
              onChange={(e) => {
                setFinput({
                  ...finput,
                  value: e.target.value,
                });
              }}
              required={true}
            />
          </div>
        </div>
      </ComponentViewer>
      <ComponentViewer
        usage={`const [tagsInput, setTagsInput] = useState({
    data: [],
    value: "",
    error: "",
  });
//---------------------------------------            
<TagsInput
  label="tags"
  placeholder="Enter some key"
  value={tagsInput.value}
  error={tagsInput.error}
  onChange={(e) => {
    setTagsInput({
      ...tagsInput,
      value: e.target.value,
    });
  }}
  onAddItem={(item) => {
    let d = [...tagsInput.data];
    d.push(item);
    setTagsInput({
      ...tagsInput,
      data: d,
      value: "",
    });
  }}
  onRemoveItem={(item) => {
    let d = [...tagsInput.data];
    setTagsInput({
      ...tagsInput,
      data: d.filter((i) => i !== item),
    });
  }}
  list={tagsInput.data}
/>`}
        file={"TagsInput"}
      >
        <TagsInput
          label="tags"
          placeholder="Enter some key"
          value={tagsInput.value}
          error={tagsInput.error}
          onChange={(e) => {
            setTagsInput({
              ...tagsInput,
              value: e.target.value,
            });
          }}
          onAddItem={(item) => {
            let d = [...tagsInput.data];
            d.push(item);
            setTagsInput({
              ...tagsInput,
              data: d,
              value: "",
            });
          }}
          onRemoveItem={(item) => {
            let d = [...tagsInput.data];
            setTagsInput({
              ...tagsInput,
              data: d.filter((i) => i !== item),
            });
          }}
          list={tagsInput.data}
        />
      </ComponentViewer>
      <ComponentViewer
        usage={`const [select, setSelect] = useState({
  selectedItem: {},
  items: [
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
  ],
  error: "",
});
//---------------------------------------            
<Select
  label="Country :"
  placeholder="Select Country"
  items={select.items}
  error={select.error}
  selectedItem={select.selectedItem}
  onAddItem={(item) => {
    setSelect({
      ...select,
      selectedItem: item,
    });
  }}
  onRemoveItem={() => {
    setSelect({
      ...select,
      selectedItem: {},
    });
  }}
  showSearchInput={true}
/>`}
        file={"Select"}
      >
        <Select
          label="Country :"
          placeholder="Select Country"
          items={select.items}
          error={select.error}
          selectedItem={select.selectedItem}
          onAddItem={(item) => {
            setSelect({
              ...select,
              selectedItem: item,
            });
          }}
          onRemoveItem={() => {
            setSelect({
              ...select,
              selectedItem: {},
            });
          }}
          showSearchInput={true}
        />
      </ComponentViewer>
      <ComponentViewer
        usage={`const [multipleSelect, setMultipleSelect] = useState({
  selectedItems: [],
  nonSelectedItems: [
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
  ],
  error: "",
});
//---------------------------------------            
<MultiSelect
  label="Countries :"
  placeholder="Select multiple countries"
  error={multipleSelect.error}
  nonSelectedItems={multipleSelect.nonSelectedItems}
  selectedItems={multipleSelect.selectedItems}
  onAddItem={(item) => {
    let nsi = [...multipleSelect.nonSelectedItems];
    let newNsi = nsi.filter((i) => i.id !== item.id);
    setMultipleSelect({
      ...multipleSelect,
      selectedItems: [...multipleSelect.selectedItems, item],
      nonSelectedItems: newNsi,
    });
  }}
  onRemoveItem={(item) => {
    let si = [...multipleSelect.selectedItems];
    let newSi = si.filter((i) => i.id !== item.id);
    setMultipleSelect({
      ...multipleSelect,
      selectedItems: newSi,
      nonSelectedItems: [...multipleSelect.nonSelectedItems, item],
    });
  }}
/>`}
        file={"MultiSelect"}
      >
        <MultiSelect
          label="Countries :"
          placeholder="Select multiple countries"
          error={multipleSelect.error}
          nonSelectedItems={multipleSelect.nonSelectedItems}
          selectedItems={multipleSelect.selectedItems}
          onAddItem={(item) => {
            let nsi = [...multipleSelect.nonSelectedItems];
            let newNsi = nsi.filter((i) => i.id !== item.id);
            setMultipleSelect({
              ...multipleSelect,
              selectedItems: [...multipleSelect.selectedItems, item],
              nonSelectedItems: newNsi,
            });
          }}
          onRemoveItem={(item) => {
            let si = [...multipleSelect.selectedItems];
            let newSi = si.filter((i) => i.id !== item.id);
            setMultipleSelect({
              ...multipleSelect,
              selectedItems: newSi,
              nonSelectedItems: [...multipleSelect.nonSelectedItems, item],
            });
          }}
        />
      </ComponentViewer>
      <ComponentViewer
        usage={`const [checkbox, setCheckbox] = useState(false);
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
        usage={`const [toggle, setToggle] = useState(false);
//---------------------------------------            
<ToggleSwitch
  label={"label"}
  checked={toggle}
  onChange={(e) => {
    setToggle(e.target.checked);
  }}
/>`}
        file={"ToggleSwitch"}
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
        usage={`const [selectedRadio, setSelectedRadio] = useState(0);
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
    </ComponentsPageLayout>
  );
}

export default Inputs;
