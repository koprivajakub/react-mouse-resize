import React, { useState } from "react";

import { HTMLElementResize } from "react-mouse-resize";

const App = () => {
  const [size, setSize] = useState({
    width: "auto",
    height: "auto"
  });
  return (
      <HTMLElementResize size={size} onResized={(size) => {
        setSize(size);
      }} mode={"both"}>
        <div
          style={{
            background: "red",
            width: "100%",
            height: "100%",
            minWidth: "100px",
            minHeight: "100px",
          }}
        >
        </div>
      </HTMLElementResize>
  );
};

export default App;
