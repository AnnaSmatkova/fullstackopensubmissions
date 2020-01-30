import React from "react";
import Person from "./Person";

const rows = (names, onDelete) =>
  names.map(person => (
    <Person
      key={person.id}
      name={person.name}
      number={person.phone}
      id={person.id}
      onDelete={onDelete}
    />
  ));

const Persons = ({ names, onDelete }) => {
  return (
    <table>
      <tbody>{rows(names, onDelete)}</tbody>
    </table>
  );
};

export default Persons;
