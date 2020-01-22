import React from "react";

const Button = ({ id, text, onChange }) => {
  return (
    <button id={id} onClick={onChange}>
      {text}
    </button>
  );
};

export default Button;
