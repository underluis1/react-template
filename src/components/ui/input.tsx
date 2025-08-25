import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full min-w-0 px-3 py-2 border rounded-md bg-input text-foreground placeholder:text-muted-foreground transition-[color,box-shadow] shadow-xs outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:border-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "border-input bg-white text-foreground",
        email:
          "border-input text-[14px] text-primary  text-foreground focus-visible:border-blue-500 focus-visible:ring-blue-500/50",
        password:
          "border-input text-[14px]  text-foreground tracking-wide focus-visible:border-red-500 focus-visible:ring-red-500/50",
        deactive: "border-muted bg-muted text-muted-foreground",
      },
      size: {
        default: "h-9 ",
        sm: "h-8 text-sm",
        lg: "h-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type NativeInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
>;

export interface InputProps
  extends NativeInputProps,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
