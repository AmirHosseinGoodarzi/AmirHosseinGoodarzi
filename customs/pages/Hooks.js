//============== React & Next ================
import React from "react";
//============== images & icons ==============
//============== in Components ===============
import HookViewer from "components/HookViewer/HookViewer";
import { useNetworkStatus } from "customs/hooks/useNetworkStatus";
//============== ex Components ===============
//================= redux ====================
//============================================
function Hooks() {
  const [isOnline, connection] = useNetworkStatus();
  return (
    <>
      <h1>{isOnline ? "Online" : "Offline"}</h1>
      <h1>Down Link : {connection.downlink}</h1>
      <h1>effective type : {connection.effectiveType}</h1>
      <h1>latency : {connection.rtt}</h1>
      <h1>data saver? : {connection.saveData?"Yes":"No"}</h1>
      <HookViewer
        source={`this is source of my first hook`}
        usage={`usage`}
        file={"useNetworkStatus"}
      />
    </>
  );
}

export default Hooks;
