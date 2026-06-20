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
    <div className="flex flex-col h-full w-full relative items-center justify-center">
      
      <div className="mb-2 text-slate-400 font-['Inter'] text-sm tracking-wider uppercase font-semibold">
        Minhas Certificações
      </div>

      <button
        className="absolute top-8 z-20 bg-indigo-600/80 hover:bg-indigo-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg backdrop-blur-sm transition-colors border border-white/10"
        onClick={handlePrev}
      >
        <UpOutlined className="text-xs" />
      </button>

      <div className="relative w-full max-w-xs h-64 overflow-hidden mt-6 mb-6 rounded-xl">
        <div
          ref={containerRef}
          className="flex flex-col h-full overflow-hidden transition-all duration-500 ease-in-out hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`flex-shrink-0 flex flex-col items-center justify-center w-full h-full p-2 transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-30"
              }`}
            >
              <div className="w-full h-full glass border border-white/10 text-white p-4 flex flex-col items-center justify-center rounded-xl shadow-2xl hover:border-indigo-500/50 transition-colors">
                <span className="text-center font-semibold text-sm mb-3 font-['Inter'] text-slate-200">
                  {card.content}
                </span>
                <a 
                  className="z-20 block overflow-hidden rounded-lg border border-white/5 shadow-md transform hover:scale-105 transition-transform" 
                  target="_blank" 
                  rel="noreferrer" 
                  href={card.certLink}
                >
                  <img src={card.bgImage} alt={card.content} className="w-full h-auto object-cover max-h-32" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute bottom-4 z-20 bg-indigo-600/80 hover:bg-indigo-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg backdrop-blur-sm transition-colors border border-white/10"
        onClick={handleNext}
      >
        <DownOutlined className="text-xs" />
      </button>
      
    </div>
  );
};

export default VerticalSlider;
