import React from "react";

const Card = ({ item }) => {
  return (
      <img className="car" src={item.url} />
  );
};

export default Card;
