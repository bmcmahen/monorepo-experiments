// src/Button.tsx
import React from "react";

// src/theme/index.tsx
var theme = {
  color: "#08e"
};

// src/Button.tsx
import { helloWorld } from "utils";
function Button() {
  return /* @__PURE__ */ React.createElement("button", {
    style: {
      color: theme.color,
      padding: "1rem"
    },
    type: "button"
  }, "Boop ", helloWorld());
}
export {
  Button
};
