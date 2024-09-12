import React from "react";

const TabsWrapper = ({ children, items, ContainerType = "menu" }) => {
  // Devried variable
  // First letter has to be Uppercase if it is a lowercase it will be treated as a built-in wrapper
  //   const ContainerType = containerType;
  return (
    <>
      <ContainerType>{items}</ContainerType>
      {children}
    </>
  );
};

export default TabsWrapper;
