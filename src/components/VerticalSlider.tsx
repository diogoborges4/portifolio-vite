// src/components/VerticalSlider.tsx
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import React, { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

const cards = [
  {
    id: 1,
    content: "React do zero a maestria",
    bgImage: "/Design sem nome (7).png",
    certLink:
      "https://udemy-certificate.s3.amazonaws.com/pdf/UC-38629c02-e169-4eda-9bb9-4e5fd37dfe05.pdf",
  },
  {
    id: 2,
    content: "Rocketseat: Trilha Especializar",
    bgImage: "/Design sem nome (8).png",
    certLink:
      "https://app.rocketseat.com.br/certificates/56fb502b-aa76-4987-955b-e00b9dca104c",
  },
  {
    id: 3,
    content: "Rocketseat: Trilha Fundamentar",
    bgImage: "/Design sem nome (9).png",
    certLink:
      "https://app.rocketseat.com.br/certificates/491eab86-0197-4241-8edf-0dbc146dd78d",
  },
  {
    id: 4,
    content: "Rocketseat: Trilha Conectar",
    bgImage: "/Design sem nome (10).png",
    certLink:
      "https://app.rocketseat.com.br/certificates/130b27e4-d41b-4dc0-9a53-90936506f487",
  },
  {
    id: 5,
    content: "React Native: do zero ao avançado",
    bgImage: "/React Native.png",
    certLink:
      "https://www.udemy.com/certificate/UC-4ded12d6-05bc-4c98-a08f-c97e76951046/",
  },
];

const VerticalSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.clientHeight * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <>
      <div className="absolute z-20  top-60 right-52 max-[1240px]:relative max-[1240px]:left-2 max-[1240px]:top-0  ">
        <h1 className="">Minhas Certificações</h1>
      </div>
      <div className="absolute max-[1240px]:relative max-[1240px]:top-0 max-[1240px]:left-9 max-[540px]:left-4 top-96 right-44 w-64 h-64 overflow-hidden">
        <div
          ref={containerRef}
          className="flex flex-col h-full overflow-hidden transition-all duration-500 ease-in-out"
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`flex items-center justify-center h-full transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-40"
              }`}
            >
              <div className="w-64 h-64 bg-blue-800 text-white px-1 text-sm flex flex-col items-center justify-center rounded-lg shadow-lg">
                {card.content}
                <a className=" z-20 mt-2" target="norefer" href={card.certLink}>
                  <img src={card.bgImage} alt="bgImg" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute w-64  h-96 top-40 right-44 max-[1240px]:relative max-[1240px]:left-8 max-[1240px]:-top-32">
        <button
          className="absolute top-40 right-24 bg-gray-500 text-white px-4 py-2 rounded"
          onClick={handlePrev}
        >
          <UpOutlined />
        </button>
        <button
          className="absolute -bottom-40 right-24 bg-gray-500 text-white max-[1240px]:relative px-4 py-2 rounded"
          onClick={handleNext}
        >
          <DownOutlined />
        </button>
      </div>
    </>
  );
};

export default VerticalSlider;
