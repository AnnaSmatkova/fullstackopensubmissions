import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ label, count }) => {
  return (
    <tr>
      <th>{label}</th>
      <th>{count}</th>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, total }) => {
  if (total === 0) {
    return <p>No feedback given</p>;
  }

  const average = Math.round(((good - bad) / total) * 100) / 100;
  const posit_percent = Math.round((good / total) * 10000) / 100 + "%";

  return (
    <table>
      <Statistic label="Good: " count={good} />
      <Statistic label="Neutral: " count={neutral} />
      <Statistic label="Bad: " count={bad} />
      <Statistic label="All: " count={total} />
      <Statistic label="Average: " count={average} />
      <Statistic label="Positive: " count={posit_percent} />
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const addGood = () => () => {
    setGood(good + 1);
  };

  const addNeutral = () => () => {
    setNeutral(neutral + 1);
  };

  const addBad = () => () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback:</h1>
      <div>
        <Button handleClick={addGood()} text="Good" />
        <Button handleClick={addNeutral()} text="Neutral" />
        <Button handleClick={addBad()} text="Bad" />
      </div>
      <h1>Statistics:</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
