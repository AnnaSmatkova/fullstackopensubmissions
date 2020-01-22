import React from "react";

const mapLanguages = languages =>
  languages.map(language => <li key={language.iso639_1}>{language.name}</li>);

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <div>
        capital {country.capital}
        <br />
        population {country.population}
      </div>
      <h2>languages</h2>
      <ul>{mapLanguages(country.languages)}</ul>
      <img alt={`flag of ${country.name}`} src={country.flag} width="175" />
    </div>
  );
};

export default Country;
