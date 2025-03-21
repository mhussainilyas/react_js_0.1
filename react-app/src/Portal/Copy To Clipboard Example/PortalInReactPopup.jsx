import React from "react";
import ReactDOM, { createPortal } from "react-dom";

const PortalInReactPopup = ({ copied }) => {
  let styles = {
    position: "absolute",
    bottom: "3rem",
    right: "3rem",
    backgroundColor: "papayawhip",
    color: "orange",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 0 10px orange",
  };
  return createPortal(
    <section>
      {copied && <div style={styles}>Copied To Clipboard</div>}
    </section>,
    document.querySelector("#portal-in-react-popup") // Ensure this div exists in your HTML
  );
};

export default PortalInReactPopup;
