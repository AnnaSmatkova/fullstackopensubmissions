import React from "react";

const Filter = ({ search, change }) => {
  return (
    <p>
      filter shown with: <input value={search} onChange={change} />
    </p>
  );
};

export default Filter;
