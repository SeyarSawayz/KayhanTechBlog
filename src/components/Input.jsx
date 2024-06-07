import React, { useId } from "react";

const Input = ({ type = "text", label, className = "", ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-[#020617] outline-none focus:border-white   duration-200 focus:shadow-[#7634D9] focus:shadow-md text-slate-300 border border-slate-700 w-full  ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
};

export default React.forwardRef(Input);
