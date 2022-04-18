import React from "react";
import { theme } from "theme";
import { helloWorld } from "utils";

export function Button() {
  return (
    <button
      style={{
        color: theme.color,
        padding: "1rem",
      }}
      type="button"
    >
      Boop {helloWorld()}
    </button>
  );
}
