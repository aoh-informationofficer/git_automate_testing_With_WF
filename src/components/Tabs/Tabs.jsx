import React from "react";

const Tabs = ({ children, onClick, isSelected }) => {
  return (
    <li>
      <button
        className={isSelected ? "active" : ""}
        onClick={(e) => onClick(e)}
      >
        {children}
      </button>
    </li>
  );
};

export default Tabs;
