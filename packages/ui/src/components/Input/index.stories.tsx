import { Meta } from "@storybook/react";
import { Input } from ".";

const meta: Meta = {
  title: "Components/Input",
  component: Input,
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

export default meta;

type InputStory = typeof meta;

export const Default: InputStory = {
  args: {
    placeholder: "Enter your name",
  },
};
