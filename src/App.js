import React from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import { useSelector } from "react-redux";

function App() {
  const isDarkMode = useSelector((state) => state.darkMode.enabled);

  return (
    <div
      className={`h-screen w-screen p-[3em] ${
        isDarkMode
          ? "bg-bg-black text-text-primary"
          : "bg-bg-white text-text-secondary"
      }`}
    >
      <div className="flex flex-row ">
        <div className="font-didot flex flex-1">Hi There</div>
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default App;
