import React, { useContext, useEffect, useState } from "react";
import ForecastTable from "./ForecastTable";
import { HomePageContext } from "../HomePageContext";
import { getWeatherData } from "../services";
import { WeatherData } from "../services/types";

export default function CurrentForecast() {
  const { cityName, isSearchTriggered, setIsSearchTriggered } =
    useContext(HomePageContext);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const getCityWeather = async () => {
      if (isSearchTriggered) {
        try {
          const response = await getWeatherData(cityName);
          setWeatherData(response);
        } catch (error) {
          console.error("Error fetching weather data", error);
        } finally {
          setIsSearchTriggered(false);
        }
      }
    };
    getCityWeather();
  }, [isSearchTriggered, cityName]);

  const weatherIconUrl = weatherData?.weather?.[0]?.icon
    ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    : null;

  return (
    <div className="w-full">
      <section className=" w-full flex flex-row items-start justify-between">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-[1.7rem] font-bold">{weatherData?.name}</h1>
            <h4 className="text-stone-400">
              Humidity: {weatherData?.main?.humidity || 0}%
            </h4>
          </div>
          <div className="text-[2.5rem] font-semibold">
            {weatherData?.main?.temp || "N/A"} °C
          </div>
        </div>
        <div className=" flex items-center justify-center h-[150px]">
          {weatherIconUrl && (
            <img
              src={weatherIconUrl}
              alt={weatherData?.weather[0].description}
              className="object-contain h-full pl-8"
            />
          )}
        </div>
      </section>
      <section>
        <ForecastTable />
      </section>
      <section className="mt-4 flex flex-col px-16 py-4 gap-4 bg-stone-100 w-full rounded-[20px]">
        <div className="text-stone-400 font-semibold">AIR CONDITIONS</div>
        <section className="grid grid-cols-2">
          <div className="">
            <div className="text-stone-400 flex flex-row gap-2">
              <img src="/icons/thermometer.svg" alt="thermometer-icon" />
              Real Feel{" "}
            </div>
            <div className="text-[1.3rem] font-semibold">
              {weatherData?.main?.feels_like || "N/A"} °C
            </div>
          </div>
          <div>
            <div className="text-stone-400 flex flex-row gap-2">
              <img src="/icons/wind.svg" alt="wind-icon" />
              Wind{" "}
            </div>
            <div className="text-[1.3rem] font-semibold">
              {weatherData?.wind?.speed || 0} km/hr
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
