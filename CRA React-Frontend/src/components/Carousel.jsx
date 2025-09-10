import { useState, useEffect } from "react";
import "./Carousel.css"; // ou o nome do seu arquivo de CSS
import TextoHome from "./TextoHome";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "CarrosselDESKTOP (1).jpg",
    "CarrosselDESKTOP (2).jpg",
    "CarrosselDESKTOP (3).jpg",
  ];

  // Avança o slide automaticamente a cada 7 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="carousel">
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentSlide * 100}vw)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
