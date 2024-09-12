import React, { useCallback } from "react";

const Paragraph = () => {
  const genRandomWord = useCallback((max) => {
    return Math.floor(Math.random() * (max + 1));
  }, []);

  const reactWord = ["Fundamental", "Important", "Some Cool", "Core"];

  return (
    <p>
      {reactWord[genRandomWord(3)]} React concepts you will need for almost any
      app you are going to build!
    </p>
  );
};

export default Paragraph;
