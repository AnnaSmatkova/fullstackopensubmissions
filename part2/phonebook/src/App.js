import React, { useState, useEffect } from "react";

// services
import contactService from "./services/contacts";

// components
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationType, setNotificationType] = useState("");

  useEffect(() => {
    contactService.getAll().then(response => setPersons(response));
  }, []);

  const namesToShow = persons.filter(person =>
    person.name.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase())
  );

  const addInfo = event => {
    event.preventDefault();
    const nameArray = persons.map(person => person.name);
    if (nameArray.indexOf(newName) === -1) {
      const nameObject = {
        name: newName,
        phone: newNumber,
        date: new Date().toISOString(),
        id: persons[persons.length - 1].id + 1
      };

      setNotificationMessage(`Added ${newName}`);
      setNotificationType("positive");

      setTimeout(() => {
        setNotificationMessage(null);
      }, 5000);

      contactService.create(nameObject).then(returnedContact => {
        setPersons(persons.concat(returnedContact));
        setNewName("");
        setNewNumber("");
      });
    } else {
      if (
        window.confirm(
          `${newName} has already been added to phonebook. Do you want to change the number?`
        )
      ) {
        const findPerson = persons.find(person => person.name === newName);
        const changedPerson = { ...findPerson, phone: newNumber };

        contactService
          .changeNumber(changedPerson)
          .then(returnedContact => {
            setPersons(
              persons.map(person =>
                person.id !== returnedContact.id ? person : returnedContact
              )
            );
          })
          .catch(error => {
            setNotificationType("negative");
            setNotificationMessage(
              `Information of ${newName} has already been removed from the server`
            );
            setTimeout(() => {
              setNotificationMessage(null);
            }, 5000);
          });
        setNewName("");
        setNewNumber("");
      }
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

  const handleContactDeletion = event => {
    const deletePerson = persons.filter(
      person => person.id == event.target.id
    )[0];
    if (window.confirm(`Do you want to delete ${deletePerson.name}?`)) {
      contactService.deleteContact(deletePerson.id);
      setPersons(persons.filter(person => person.id != event.target.id));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={newSearch} change={handleSearchChange} />
      <Notification message={notificationMessage} type={notificationType} />
      <h3>add a new</h3>
      <PersonForm
        addInfo={addInfo}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons names={namesToShow} onDelete={handleContactDeletion} />
    </div>
  );
};

export default App;
