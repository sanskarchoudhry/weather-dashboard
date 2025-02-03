import React, { useContext } from "react";
import { HomePageContext } from "../HomePageContext";

export default function TemperatureToggle() {
  const { temperatureUnit, toggleTemperatureUnit } =
    useContext(HomePageContext);

  return (
    <div className="flex items-center gap-2 mt-4">
      <span className="text-sm font-medium text-gray-600">°C</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={temperatureUnit === "imperial"}
          onChange={toggleTemperatureUnit} // Corrected handler
        />
        <div
          className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 
            after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white 
            after:border after:rounded-full after:h-4 after:w-4 after:transition-all 
            peer-checked:after:translate-x-5"
        ></div>
      </label>
      <span className="text-sm font-medium text-gray-600">°F</span>
    </div>
  );
}
