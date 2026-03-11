import React from "react";
const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm capitalize">{label}</span>

      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered w-full ${size}`}
      />
    </div>
  );
};
export default FormInput;
