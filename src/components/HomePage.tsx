import React, { useState } from "react";
import CityInput from "./CityInput";
import WeatherDashboard from "./WeatherDashboard";
import { HomePageContext } from "../HomePageContext";
import FutureForecast from "./FutureForecast";

export default function HomePage() {
  const [cityName, setCityName] = useState<string>("");
  const [isSearchTriggered, setIsSearchTriggered] = useState<boolean>(false);

  return (
    <div className="bg-[#fff] rounded-[25px] w-[50%] flex flex-row items-center justify-center p-12">
      <HomePageContext.Provider
        value={{
          cityName,
          setCityName,
          isSearchTriggered,
          setIsSearchTriggered,
        }}
      >
        <section className="w-[75%] flex flex-col items-start p-4 justify-center">
          <CityInput />
          <WeatherDashboard />
        </section>
        <FutureForecast />
      </HomePageContext.Provider>
    </div>
  );
}
