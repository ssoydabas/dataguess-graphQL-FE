import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./components/Navigation", () => () => <div>Mock Navigation</div>);
jest.mock("./components/CountriesList", () => () => (
  <div>Mock CountriesList</div>
));

describe("App component", () => {
  it("renders without crashing", () => {
    render(<App />);

    expect(screen.getByText("Mock Navigation")).toBeInTheDocument();
    expect(screen.getByText("Mock CountriesList")).toBeInTheDocument();
  });
});
