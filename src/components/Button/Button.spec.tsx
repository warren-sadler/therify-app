import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders", () => {
    const { container } = render(<Button>Hello</Button>);
    expect(container).toBeDefined();
  });
});
