import { render } from "@testing-library/react";
import SizeTitle from "./SizeTitle";

describe("SizeTitle Component", () => {
  it("renders without crashing", () => {
    render(<SizeTitle size="Medium" />);
  });
});
