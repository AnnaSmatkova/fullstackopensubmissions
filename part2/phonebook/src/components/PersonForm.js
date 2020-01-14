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
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input value={newName} onChange={handleNameChange} />
            </td>
          </tr>
          <tr>
            <td>Number:</td>
            <td>
              <input value={newNumber} onChange={handleNumberChange} />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
