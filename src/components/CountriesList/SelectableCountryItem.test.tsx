import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SelectableCountryItem from "./SelectableCountryItem";

describe("SelectableCountryItem Component", () => {
  const mockOnSelect = jest.fn();

  it("renders without crashing", () => {
    render(
      <SelectableCountryItem
        name="Germany"
        backgroundColor="red"
        isSelected={false}
        onSelect={mockOnSelect}
      />
    );
  });

  it("displays the correct name", () => {
    render(
      <SelectableCountryItem
        name="Germany"
        backgroundColor="red"
        isSelected={false}
        onSelect={mockOnSelect}
      />
    );
    expect(screen.getByText("Germany")).toBeInTheDocument();
  });

  it("calls onSelect when clicked", () => {
    render(
      <SelectableCountryItem
        name="Germany"
        backgroundColor="red"
        isSelected={false}
        onSelect={mockOnSelect}
      />
    );
    fireEvent.click(screen.getByText("Germany"));
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
  });
});
