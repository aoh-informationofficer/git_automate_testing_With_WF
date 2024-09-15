import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Paragraph from "./components/paragraph/Paragraph.jsx";
import CoreConcepts from "./components/coreConcepts/CoreConcepts.jsx";
import Examples from "./components/examples/Examples.jsx";
import React from "react";

function App() {
  return (
    <Main>
      <Header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1 data-testid="h1header">React Essentials</h1>
        <Paragraph />
      </Header>
      <h2>Time to get started!</h2>
      <CoreConcepts />
      <Examples />
    </Main>
  );
}

export default App;
