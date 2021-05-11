import React from "react";

const Pubinput = ({ title, type, name, placeholder, onChange }) => {
  return (
    <div>
      <span>{title}</span>
      <input
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Pubinput;
