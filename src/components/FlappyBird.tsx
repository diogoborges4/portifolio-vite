// src/components/GameComponent.tsx
import React, { useEffect, useRef } from "react";

const GameComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const script = document.createElement("script");
      script.src = "/game.js"; // Atualize com o caminho correto do seu script de jogo
      script.async = true;
      script.onload = () => {
        // Supondo que seu script de jogo tenha uma função init para inicializar o jogo
        if (typeof window.initGame === "function") {
          window.initGame(canvas);
        }
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return <canvas ref={canvasRef} width="320" height="480" />;
};

export default GameComponent;
