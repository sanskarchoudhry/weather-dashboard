import React, { useState } from "react";
import CityInput from "./CityInput";
import WeatherDashboard from "./WeatherDashboard";
import { HomePageContext } from "../HomePageContext";
import FutureForecast from "./FutureForecast";

export default function HomePage() {
  const [cityName, setCityName] = useState<string>("");
  const [isSearchTriggered, setIsSearchTriggered] = useState<boolean>(false);

  return (
    <div className="bg-white rounded-[25px] w-full max-w-2xl md:max-w-3xl lg:max-w-4xl flex flex-col md:flex-row items-center md:items-end justify-center p-6 sm:p-8 md:p-12 shadow-lg">
      <HomePageContext.Provider
        value={{
          cityName,
          setCityName,
          isSearchTriggered,
          setIsSearchTriggered,
        }}
      >
        <section className="w-full sm:w-3/4 md:w-2/3 flex flex-col items-start p-4 justify-center">
          <CityInput />
          {cityName && <WeatherDashboard />}
        </section>

        {cityName && <FutureForecast />}
      </HomePageContext.Provider>
    </div>
  );
}
