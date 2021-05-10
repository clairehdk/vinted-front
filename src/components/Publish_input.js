import React from "react";

const Publish_input = ({ title, type, name, placeholder, onChange }) => {
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

export default Publish_input;
