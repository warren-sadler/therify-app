import { render } from "@testing-library/react";
import { TEST_IDS, Example } from "./Example";

describe("Example", function () {
  it("renders", function () {
    const { getByTestId } = render(<Example />);
    expect(getByTestId(TEST_IDS.example)).toBeInTheDocument();
  });
});
