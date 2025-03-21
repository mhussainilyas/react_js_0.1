import React, { useState } from "react";

const Switcher = () => {
  const [sw, setSw] = useState(false);
  return (
    <div>
      {sw ? <span>Dark</span> : <span>Light</span>}
      <br />
      {/* The key prop here is used to force React to create a completely new input element whenever the sw value changes. Without the key, React would try to reuse the same input element and preserve its value, even when sw changes. With the key, you ensure you get a fresh, empty input every time the switch changes state. */}
      <input type="text" key={sw ? "dark" : "light"} />
      <button onClick={() => setSw((prevSw) => !prevSw)}>Switch</button>
    </div>
  );
};

export default Switcher;
