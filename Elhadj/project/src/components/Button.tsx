import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}) => {
  const baseStyles = "font-semibold rounded-md transition-all duration-300 inline-flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-amber-600 hover:bg-amber-700 text-white",
    secondary: "bg-slate-800 hover:bg-slate-900 text-white",
    outline: "bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white",
  };
  
  const sizeStyles = {
    sm: "text-sm py-2 px-3",
    md: "text-base py-2.5 px-5",
    lg: "text-lg py-3 px-6",
  };
  
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ""}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;