import React, { useEffect, useRef } from "react";
import briyani from "../assets/briyani.jpg";
import chappathi from "../assets/chappathi.jpg";
import chicken from "../assets/chicken.jpg";
import Continent from "../assets/Continent.jpg";
import creamy from "../assets/creamy.jpg";
import differents from "../assets/differents.jpg";
import egg from "../assets/egg.jpg";
import nachos from "../assets/nachos.jpg";
import nutrients from "../assets/nutritents.jpg";
import palaks from "../assets/palaks.jpg";
import panipuri from "../assets/panipuri.jpg";
import rice from "../assets/rice.jpg";
import SouthIndian from "../assets/SouthIndian.jpg";
import sticks from "../assets/sticks.jpg";
import world from "../assets/world.jpg";
import "../styles/FoodCarousel.css";
const FoodCarousel = () => {
  const foodImages = [
    briyani,
    chappathi,
    chicken,
    Continent,
    creamy,
    differents,
    egg,
    nachos,
    nutrients,
    palaks,
    panipuri,
    rice,
    SouthIndian,
    sticks,
    world,
  ];
  const scrollRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollWidth, scrollLeft, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 500) {
          scrollRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          scrollRef.current.scrollBy({
            left: 200,
            behavior: "smooth",
          });
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={scrollRef} className="food-carousel">
      {foodImages.map((foodImage, index) => (
        <div key={index} className="food-item">
          <img src={foodImage} alt={`Food ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default FoodCarousel;
