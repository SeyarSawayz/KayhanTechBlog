import React, { useId } from "react";

const Select = ({ options = [], label, className = "", ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className={`${className}`}>
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-[#020617]  focus:border-white outline-none focus:shadow-[#7634D9] focus:shadow-md text-slate-300 border border-slate-700 duration-200 w-full ${className} `}
      >
        {options?.map((option) => (
          <option value={option} key={option + "option"}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.forwardRef(Select);
