import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "solid" | "outline" | "ghost";
};

const Button = ({ ...props }: ButtonProps) => {
  return (
    <button {...props} type="button" className="text-blue-500">
      {props.children}
    </button>
  );
};

export default Button;
