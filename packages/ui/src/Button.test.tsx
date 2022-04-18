import { render, screen } from "@testing-library/react";
import React from "react";
import { Button } from "./Button";

describe("Button", () => {
  it("should", () => {
    render(<Button />);
    expect(screen.getByText("Boop Hello World")).toBeInTheDocument();
  });
});
