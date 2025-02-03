import { useContext, useState, useEffect } from "react";
import { HomePageContext } from "../../HomePageContext";
import { getFutureForecast } from "../../services";
import { getCurrentDayForecast } from "../../utils/methods";
import { ForecastEntry } from "../../services/types";
import ErrorComponent from "../errors/ErrorComponent";
import { AxiosError } from "axios";

export default function ForecastTable() {
  const { cityName, isSearchTriggered, temperatureUnit } =
    useContext(HomePageContext);
  const [todayForecast, setTodayForecast] = useState<ForecastEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isSearchTriggered) {
      const fetchForecastData = async () => {
        try {
          const response = await getFutureForecast(cityName, temperatureUnit);
          if (response) {
            setTodayForecast(getCurrentDayForecast(response.data));
            setError(null);
          }
        } catch (err: unknown) {
          console.error("Error fetching forecast data:", err);

          if (err instanceof AxiosError) {
            setError(err.response?.data.message);
          } else {
            setError("An unexpected error occurred.");
          }
        }
      };
      fetchForecastData();
    }
  }, [isSearchTriggered, cityName, temperatureUnit]);

  if (error) return <ErrorComponent message={error} />;

  return (
    <section className="bg-stone-100 rounded-lg p-6">
      <h3 className="text-stone-500 font-semibold text-lg mb-4 uppercase">
        Today's Forecast
      </h3>

      {todayForecast.length > 0 ? (
        <div className="flex gap-4 overflow-x-auto p-2 scrollbar-hide">
          {todayForecast.map((entry, index) => {
            const time = entry.dt_txt.split(" ")[1].slice(0, 5); // Extract HH:MM
            const iconUrl = `http://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png`;

            return (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-4 rounded-xl shadow-lg min-w-[80px] sm:min-w-[100px]"
              >
                <span className="text-stone-500 text-xs sm:text-sm">
                  {time}
                </span>
                <img
                  src={iconUrl}
                  alt={entry.weather[0].description}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
                <span className="text-stone-700 font-semibold text-sm sm:text-base">
                  {entry?.main?.temp !== undefined
                    ? `${entry.main.temp.toFixed(1)} ${
                        temperatureUnit === "imperial" ? "°F" : "°C"
                      }`
                    : "N/A"}
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
