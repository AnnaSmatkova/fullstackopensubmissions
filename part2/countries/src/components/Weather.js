import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null);

  const access_key = process.env.REACT_APP_API_KEY;
  const weatherUrl = `http://api.weatherstack.com/current?access_key=${access_key}&query=${capital}`;

  useEffect(() => {
    axios.get(weatherUrl).then((response) => setWeather(response.data));
  }, [weatherUrl]);

  if (!weather) {
    return <></>;
  }

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>
        <strong>temperature: </strong> {weather.current.temperature} celsius
        <br />
        <img
          alt={weather.current.weather_descriptions[0]}
          src={weather.current.weather_icons[0]}
        />
        <br />
        <strong>wind</strong> {weather.current.wind_speed} kph direction{" "}
        {weather.current.wind_dir}
      </p>
    </div>
  );
};

export default Weather;
