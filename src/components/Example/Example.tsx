export const TEST_IDS = {
  example: "example",
};

export function Example() {
  return <div data-testid={TEST_IDS.example}>Hello, Example!</div>;
}
