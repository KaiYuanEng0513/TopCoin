import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function DarkModeToggle() {
  const darkModeEnabled = useSelector((state) => state.darkMode.enabled);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(toggleDarkMode())}
        className={`p-2 rounded-lg transition-colors duration-1000  ease-in-out ${
          darkModeEnabled
            ? " bg-bg-white text-text-secondary "
            : " bg-bg-black text-text-primary"
        }`}
      >
        {darkModeEnabled ? <DarkModeIcon /> : <LightModeIcon />}
      </button>
    </div>
  );
}

export default DarkModeToggle;
