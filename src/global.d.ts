declare global {
  interface Window {
    initGame: (canvas: HTMLCanvasElement) => void;
  }
}

export {};
