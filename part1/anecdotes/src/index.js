import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = props => {
  const pointsStart = new Array(anecdotes.length + 1)
    .join("0")
    .split("")
    .map(parseFloat);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(pointsStart);

  const indexMax = votes.indexOf(Math.max(...votes));

  const setRandom = () => () => {
    const randint = Math.round(Math.random() * (anecdotes.length - 1));
    return setSelected(randint);
  };

  const addVote = () => () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    return setVotes(newVotes);
  };

  return (
    <div>
      <h1>Anecode of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <Button handleClick={setRandom()} text="Next annecdote" />
      <Button handleClick={addVote()} text="Vote" />
      <div>has {votes[selected]} votes</div>
      <h1>Anecode with the most votes</h1>
      <p>{props.anecdotes[indexMax]}</p>
      <div>has {votes[indexMax]} votes</div>
    </div>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
