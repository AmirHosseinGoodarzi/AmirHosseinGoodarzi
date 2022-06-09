//============== React & Next ================
import React, { useState } from "react";
//============== images & icons ==============
//============== in Components ===============
import HookViewer from "components/HookViewer/HookViewer";
import { useNetworkStatus } from "customs/hooks/useNetworkStatus";
import { useToggle } from "customs/hooks/useToggle";
import FloatingInput from "customs/components/FloatingInput/FloatingInput";
//============== ex Components ===============
//================= redux ====================
//============================================

function Hooks() {
  const [searchInput, setSearchInput] = useState({
    value: "",
    error: "",
  });

  const [isOnline, connection] = useNetworkStatus();
  const [theme, toggleTheme] = useToggle('dark', ['dark', 'light']);

  const hooks_list = [
    {
      usage: `const [isOnline, connection] = useNetworkStatus();

<p>{isOnline ? "Online" : "Offline"}</p>
<p>Down Link : {connection.downlink}</p>
<p>effective type : {connection.effectiveType}</p>
<p>latency : {connection.rtt}</p>
<p>data saver? : {connection.saveData ? "Yes" : "No"}</p>`,
      description: `A hook for get user network status`,
      file: `useNetworkStatus`,
      children: (
        <>
          <p>{isOnline ? "Online" : "Offline"}</p>
          <p>Down Link : {connection.downlink}</p>
          <p>effective type : {connection.effectiveType}</p>
          <p>latency : {connection.rtt}</p>
          <p>data saver? : {connection.saveData ? "Yes" : "No"}</p>
        </>
      ),
    },
    {
      usage: `const [theme, toggleTheme] = useToggle('dark', ['dark', 'light']);

<h1>{`+"`Theme: ${theme}`"+`}</h1>
<button onClick={() => toggleTheme()}>Toggle!</button>`,
      description: `A hook for get user network status`,
      file: `useToggle`,
      children: (
        <>
            <h1 className="text-2xl my-2">{`Theme: ${theme}`}</h1>
            <button onClick={() => toggleTheme()} className="p-2 my-2 bg-main text-dark rounded-md font-bold">Toggle theme</button>
        </>
      ),
    },
  ];
  return (
    <>
      <FloatingInput
        label="Search by name"
        value={searchInput.value}
        error={searchInput.error}
        onChange={(e) => {
          setSearchInput({
            ...searchInput,
            value: e.target.value,
          });
        }}
        wrapperClassNames="!w-3/4 lg:!w-1/2 !m-10"
        required={true}
      />
      {hooks_list
        .filter((hook) =>
          hook.file.toLowerCase().includes(searchInput.value.toLowerCase())
        )
        .map((hook, index) => {
          return (
            <HookViewer
              key={index}
              usage={hook.usage}
              description={hook.description}
              file={hook.file}
            >
              {hook.children}
            </HookViewer>
          );
        })}
    </>
  );
}

export default Hooks;
