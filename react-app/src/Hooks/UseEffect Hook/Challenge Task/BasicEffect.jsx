import React, { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("BasicEffect component mounted");
  }, []);
  return (
    <div>
      <p>
        Check the <code>"console.log"</code> to see the message.
      </p>
    </div>
  );
};

export default BasicEffect;
