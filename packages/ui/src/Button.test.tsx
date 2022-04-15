import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("should", () => {
    render(<Button />);
    expect(screen.getByText("Boop")).toBeInTheDocument();
  });
});
