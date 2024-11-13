import React from "react";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import Description from "./components/Description";
import Footer from "./components/Footer";

import car1 from "./assets/car1.jpg";
import car2 from "./assets/car2.jpg";
import car3 from "./assets/car3.webp";



const App = () => {
  const cars = [
    {
      id: 1,
      url: car1,
    },

    {
      id: 2,
      url: car2,
    },

    {
      id: 3,
      url: car3,
    },
  ];
  return (
    <div>
      <Navbar />
      <CardList title="Cars" data={cars} />
      <Description/>
      <Footer/>
    </div>
  );
};

export default App;
