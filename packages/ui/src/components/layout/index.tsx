import styled from "@emotion/styled";
import { AllHTMLAttributes, forwardRef } from "react";

const BoxStyle = styled.div`
  background-color: red;
`;

type BoxProps = AllHTMLAttributes<HTMLDivElement> & {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  // children?: React.ReactNode;
  ref?: React.Ref<HTMLDivElement> | null;
};

export const Box: React.FC<BoxProps> = forwardRef<HTMLDivElement, BoxProps>(
  ({ as = "div", className = "", ...props }, ref) => {
    return <BoxStyle ref={ref} as={as} className={className} {...props} />;
  }
);
