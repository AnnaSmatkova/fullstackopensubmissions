import React from "react";
import Button from "./Button";

const Person = ({ name, number, id, onDelete }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{number}</td>
      <td>{<Button onChange={onDelete} text={"delete"} id={id} />}</td>
    </tr>
  );
};

export default Person;
