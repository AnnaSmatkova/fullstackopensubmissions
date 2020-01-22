import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Country from "./components/Country";
import Button from "./components/Button";
import Weather from "./components/Weather";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => setCountries(response.data));
  }, []);

  const countriesToShow = countries.filter(country =>
    country.name.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase())
  );

  const showCountry = e => {
    setNewSearch(countries[e.target.id].name);
  };

  const rows = filteredCountries => {
    if (newSearch.length === 0) {
      return;
    } else if (filteredCountries.length === 1) {
      const country = filteredCountries[0];
      return (
        <div>
          <Country country={country} />
          <Weather capital={country.capital} />
        </div>
      );
    } else if (filteredCountries.length <= 10) {
      return filteredCountries.map(country => (
        <div key={country.alpha3Code}>
          {country.name}
          <Button
            id={countries.indexOf(country)}
            text={"show"}
            onChange={showCountry}
          />
        </div>
      ));
    } else {
      return <div>Too many matches specify another filter</div>;
    }
  };

  const handleNewSearch = event => {
    setNewSearch(event.target.value);
  };

  return (
    <div>
      <p>
        find countries{" "}
        <input type="text" onChange={handleNewSearch} value={newSearch}></input>
      </p>
      <h1>Countries: </h1>
      {rows(countriesToShow)}
    </div>
  );
};

export default App;
