import React, { useContext, useState, useEffect } from "react";
import { HomePageContext } from "../HomePageContext";
import { getFutureForecast } from "../services";
import { getCurrentDayForecast } from "../utils/methods";
import { ForecastEntry } from "../services/types";

export default function ForecastTable() {
  const { cityName, isSearchTriggered } = useContext(HomePageContext);
  const [todayForecast, setTodayForecast] = useState<ForecastEntry[]>([]);

  useEffect(() => {
    if (isSearchTriggered) {
      const fetchForecastData = async () => {
        const response = await getFutureForecast(cityName);
        if (response) setTodayForecast(getCurrentDayForecast(response.data));
      };
      fetchForecastData();
    }
  }, [isSearchTriggered, cityName]);

  return (
    <section className="bg-stone-100 rounded-lg p-6 ">
      <h3 className="text-stone-500 font-semibold text-lg mb-4 uppercase">
        Today's Forecast
      </h3>
      {todayForecast.length > 0 ? (
        <div className="flex gap-6 overflow-x-auto p-2">
          {todayForecast.map((entry, index) => {
            const time = entry.dt_txt.split(" ")[1].slice(0, 5); // Extract HH:MM
            const iconUrl = `http://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png`;

            return (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md min-w-[100px]"
              >
                <span className="text-stone-500 text-sm">{time}</span>
                <img
                  src={iconUrl}
                  alt={entry.weather[0].description}
                  className="w-10 h-10"
                />
                <span className="text-stone-700 font-semibold">
                  {entry.main.temp.toFixed(1)}°C
                </span>
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
