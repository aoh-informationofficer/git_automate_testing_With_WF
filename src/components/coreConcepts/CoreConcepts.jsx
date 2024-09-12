import React from "react";
import { CORE_CONCEPTS } from "../../data.js";
import Card from "../card/Card.jsx";
import Section from "../Section/Section.jsx";

const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((i) => (
          <Card key={i.title} {...i} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
