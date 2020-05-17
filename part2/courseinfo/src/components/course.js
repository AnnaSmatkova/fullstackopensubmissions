import React from "react";

const Header = ({ course }) => {
  return <h2>{course}</h2>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  const mapParts = () =>
    parts.map((part) => <Part key={part.id} part={part} />);
  return <>{mapParts()}</>;
};

const Total = ({ parts }) => {
  const sumOfExerxices = parts
    .map((parts) => parts.exercises)
    .reduce((a, b) => a + b, 0);
  return (
    <p>
      <strong>Total of {sumOfExerxices} exercises</strong>
    </p>
  );
};

const Course = ({ name, parts }) => {
  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default Course;
