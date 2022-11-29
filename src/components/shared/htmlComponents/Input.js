import React from "react";

const Input = ({ type, value, placeholder, onChangeEvent }) => {
  return (
    <>
      <input
        type={type ?? "text"}
        value={value ?? ""}
        placeholder={placeholder ?? ""}
        onChange={onChangeEvent ?? this.onChange}
      />
    </>
  );
};

export default Input;