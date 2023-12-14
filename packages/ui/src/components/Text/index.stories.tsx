import { Meta } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
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

type TextStory = typeof meta;

export const Default: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
  },
};

export const Emphasis: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
    emphasis: "low",
  },
};

// Story for Different Sizes
export const Small: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
    size: "sm",
  },
};

export const Base: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
    size: "base",
  },
};

export const Large: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
    size: "lg",
  },
};

export const XLarge: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
    size: "xl",
  },
};

export const XXLarge: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
    size: "2xl",
  },
};

export const XXXLarge: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
    size: "3xl",
  },
};

// Story for Different Widths

export const Thin: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
    width: "thin",
  },
};

export const Normal: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
    width: "normal",
  },
};

export const Medium: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
    width: "medium",
  },
};

export const Semibold: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
    width: "semibold",
  },
};

export const Bold: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
    width: "bold",
  },
};

export const Black: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
    width: "black",
  },
};

// Story for different alignments

export const Left: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
    as: "p",
    align: "left",
  },
  parameters: {
    layout: "padded",
  },
};

export const Center: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
    as: "p",
    align: "center",
  },
  parameters: {
    layout: "padded",
  },
};

export const Right: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
    as: "p",
    align: "right",
  },
  parameters: {
    layout: "padded",
  },
};

// Story for different styles

export const Italic: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
    italic: true,
  },
};

export const Underline: TextStory = {
  args: {
    children: "Be the change you want to see in the world  - Mahatma Gandhi",
    underline: true,
  },
};
