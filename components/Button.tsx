import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 font-sans font-medium";
  
  const variants = {
    primary: "bg-stone-800 text-white hover:bg-gold-600 hover:text-white border border-transparent",
    outline: "border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white",
    text: "bg-transparent text-stone-800 hover:text-gold-600 underline-offset-4 hover:underline px-0",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;