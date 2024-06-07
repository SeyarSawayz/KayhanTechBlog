import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-[#7634D9]",
  textColor = "text-slate-300",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} hover:text-black`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
