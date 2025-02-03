import React, { useState } from "react";
import CityInput from "./CityInput";
import WeatherDashboard from "./WeatherDashboard";
import { HomePageContext } from "../HomePageContext";

export default function HomePage() {
  const [cityName, setCityName] = useState<string>("");
  const [isSearchTriggered, setIsSearchTriggered] = useState<boolean>(false);

  return (
    <div className="">
      <HomePageContext.Provider
        value={{
          cityName,
          setCityName,
          isSearchTriggered,
          setIsSearchTriggered,
        }}
      >
        <CityInput />
        <WeatherDashboard />
      </HomePageContext.Provider>
    </div>
  );
}
