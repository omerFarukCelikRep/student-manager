import React from "react";

const Input = ({ type, value, placeholder, onChangeEvent }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChangeEvent}
      />
    </>
  );
};

export default Input;
