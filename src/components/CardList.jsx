import React from "react";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.webp";
import Card from "./Card";

const CardList = ({ title, data }) => {
  console.log(data);

  return (
    <div className="container cards row mt-4">
      <h1>{title}</h1>
      {data.map((item) => (
        <div className="col-4 " key={item.id}>
          <Card item={item}/>
        </div>
      ))}
    </div>
  );
};

export default CardList;
