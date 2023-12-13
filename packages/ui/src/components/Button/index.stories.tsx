import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
};

export default meta;

type story = StoryObj<typeof meta>;

export const Solid: story = {
  args: {
    variant: "solid",
    children: "Solid Button",
  },
};
