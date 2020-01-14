import React from "react";
import Person from "./Person";

const rows = names =>
  names.map(person => (
    <Person key={person.id} name={person.name} number={person.phone} />
  ));

const Persons = ({ names }) => {
  return (
    <table>
      <tbody>{rows(names)}</tbody>
    </table>
  );
};

export default Persons;
