import React from "react";

const PersonForm = ({
  addInfo,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange
}) => {
  return (
    <form onSubmit={addInfo}>
      <table>
        <tr>
          Name: <input value={newName} onChange={handleNameChange} />
        </tr>
        <tr>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </tr>
      </table>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
