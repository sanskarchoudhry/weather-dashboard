import React, { useContext, useState, useEffect } from "react";
import { HomePageContext } from "../HomePageContext";
import { getFutureForecast } from "../services";
import { formatDate, processFiveDayForecast } from "../utils/methods";
import { DailyForecast } from "../services/types";

export default function FutureForecast() {
  const { cityName, isSearchTriggered, temperatureUnit } =
    useContext(HomePageContext);
  const [forecastData, setForecastData] = useState<DailyForecast[]>([]);

  useEffect(() => {
    if (isSearchTriggered) {
      const getForecastData = async () => {
        const response = await getFutureForecast(cityName, temperatureUnit);
        if (response) setForecastData(processFiveDayForecast(response.data));
      };
      getForecastData();
    }
  }, [isSearchTriggered, cityName, temperatureUnit]);

  return (
    <section className="bg-stone-100 rounded-lg p-6 ">
      <h3 className="text-stone-500 font-semibold text-lg mb-4 uppercase">
        5-day Forecast
      </h3>
      {forecastData.length > 0 ? (
        <div className="space-y-4">
          {forecastData.map((data, index) => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
            const borderClass =
              index === forecastData.length - 1
                ? ""
                : "border-b pb-4 border-stone-300";

            return (
              <div
                key={index}
                className={`flex items-center gap-6 ${borderClass}`}
              >
                <div className="w-1/4 text-stone-600 font-medium">
                  {formatDate(data.date)}
                </div>
                <div className="flex items-center gap-2 text-stone-600">
                  <img src={iconUrl} alt={data.weather} className="w-8 h-8" />
                  <span>{data.weather}</span>
                </div>
                <div className="w-1/4 text-stone-700 font-semibold">
                  {data.avgTemp.toFixed(1)}
                  {temperatureUnit === "imperial" ? "°F" : "°C"}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-stone-400">No forecast available</p>
      )}
    </section>
  );
}
