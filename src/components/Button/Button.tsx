import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-tumbleweed-500",
        "text-white",
        "border-transparent",
        "hover:bg-tumbleweed-600",
        "px-4",
        "py-2",
        "rounded-full",
      ],
    },
  },
});

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  ...props
}) => <button className={button({ intent, className })} {...props} />;
