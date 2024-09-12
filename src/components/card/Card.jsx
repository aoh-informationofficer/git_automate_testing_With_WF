import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <li key={title}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default Card;
