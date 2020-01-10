import React, { useState } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: "1" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  const namesToShow = persons.filter(person =>
    person.name.toLocaleLowerCase().startsWith(newSearch.toLocaleLowerCase())
  );

  const addInfo = event => {
    event.preventDefault();
    const nameArray = persons.map(person => person.name);
    if (nameArray.indexOf(newName) === -1) {
      const nameObject = {
        name: newName,
        phone: newNumber,
        date: new Date().toISOString(),
        id: persons.length + 1
      };

      setPersons(persons.concat(nameObject));
      setNewName("");
      setNewNumber("");
    } else {
      window.alert(`${newName} has already been added to phonebook`);
    }
  };

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = event => {
    setNewSearch(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={newSearch} change={handleSearchChange} />
      <h3>add a new</h3>
      <PersonForm
        addInfo={addInfo}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons names={namesToShow} />
    </div>
  );
};

export default App;
