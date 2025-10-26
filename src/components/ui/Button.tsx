import * as React from "react";
import { cn } from "../../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles: Record<string, string> = {
    primary: "bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-400",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300",
    outline: "border border-indigo-500 text-indigo-500 hover:bg-indigo-50 focus:ring-indigo-300",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
    ghost: "bg-transparent text-indigo-500 hover:bg-gray-100 focus:ring-gray-200",
  };

  const sizeStyles: Record<string, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
