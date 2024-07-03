// src/components/Drawer.tsx
import React from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, children }) => {
  return (
    <div
      className={`fixed z-40 w-80 inset-0 flex transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div
        className=" bg-slate-900 w-80 rounded-lg border border-slate-800 h-full shadow-lg flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className=" p-4">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
