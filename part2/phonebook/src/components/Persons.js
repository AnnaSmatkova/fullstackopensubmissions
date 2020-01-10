import React from "react";
import Person from "./Person";

const rows = names =>
  names.map(person => <Person name={person.name} number={person.phone} />);

const Persons = ({ names }) => {
  return <table>{rows(names)}</table>;
};

export default Persons;
