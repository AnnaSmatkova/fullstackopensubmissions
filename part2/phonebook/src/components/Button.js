import React from "react";

const Button = ({ onChange, text, id }) => {
  return (
    <button onClick={onChange} id={id}>
      {" "}
      {text}{" "}
    </button>
  );
};

export default Button;
