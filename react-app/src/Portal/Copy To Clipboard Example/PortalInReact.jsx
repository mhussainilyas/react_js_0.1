import React, { useState } from "react";
import PortalInReactPopup from "./PortalInReactPopup";

const PortalInReact = () => {
  // States
  const [inputVal, setInputVal] = useState("");
  const [copied, setCopied] = useState(false);

  // Event Handler
  const handleCopy = () => {
    navigator.clipboard.writeText(inputVal).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    });
    setInputVal("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
      <PortalInReactPopup copied={copied} />
    </div>
  );
};

export default PortalInReact;
