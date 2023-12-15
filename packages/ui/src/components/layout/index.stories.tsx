import { Meta } from "@storybook/react";

import { Box } from ".";

const meta: Meta<typeof Box> = {
  title: "Layout/Box",
  component: Box,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: "centered",
  },
};

type BoxStories = typeof meta;
export default meta;

export const Default: BoxStories = {
  args: {
    as: "h1",
    children: "Hello World",
  },
};
