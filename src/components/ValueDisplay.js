import React, { useEffect, useRef } from "react";

function ValueDisplay({ value }) {
  const prevValueRef = useRef("");

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return (
    <div className="value-display">
      <p>Current value: {value}</p>
      <p>Previous value: {prevValueRef.current}</p>
    </div>
  );
}

export default ValueDisplay;
