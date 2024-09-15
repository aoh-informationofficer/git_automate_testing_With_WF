import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import React from "react";

test("should render the header with correct elements", () => {
  render(<App />);
  // Check if the h1 element with data-testid exists
  const headerElement = screen.getByTestId("h1header");
  expect(headerElement).toBeInTheDocument();
  expect(headerElement.textContent).toBe("React Essentials");

  // Check if the image with alt text is present
  const imageElement = screen.getByAltText("Stylized atom");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement.src).toContain("react-core-concepts.png");
});

test("should render the Core Concepts section", () => {
  render(<App />);

  // Check if the Core Concepts section is present
  const coreConceptsHeading = screen.getByText("Core Concepts");
  expect(coreConceptsHeading).toBeInTheDocument();

  // Optionally, you can also test for specific core concept items by their text or elements
});

test("should render the Examples section", () => {
  render(<App />);

  // Check if the Examples section is present
  const examplesHeading = screen.getByText("Examples");
  expect(examplesHeading).toBeInTheDocument();
});

test("should render the paragraph content", () => {
  render(<App />);

  // Check if the paragraph text is rendered correctly
  // this slashes in the getByText is a regex
  const paragraphText = screen.getByText(/ React concepts/i); // Partial match
  expect(paragraphText).toBeInTheDocument();
});

test("should render the entire app", () => {
  render(<App />);

  // Check for the header
  expect(screen.getByTestId("h1header")).toBeInTheDocument();

  // Check for the Core Concepts section
  expect(screen.getByText("Core Concepts")).toBeInTheDocument();

  // Check for the Examples section
  expect(screen.getByText("Examples")).toBeInTheDocument();
});
