import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "DesignSystem/Button",
  component: Button,
  tags: ["design-system"],
  argTypes: {
    intent: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    intent: "primary",
  },
  render(props) {
    return <Button {...props}>Hello</Button>;
  },
};
