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
    type: "text",
  },
};

export const Number: InputStory = {
  args: {
    placeholder: "Enter your age",
    type: "number",
  },
};

export const Date: InputStory = {
  args: {
    type: "Date",
  },
};

export const Time: InputStory = {
  args: {
    type: "Time",
    defaultValue: "12:00",
  },
};

export const Color: InputStory = {
  args: {
    type: "Color",
    defaultValue: "#000000",
  },
};
