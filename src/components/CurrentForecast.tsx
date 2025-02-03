import { useContext, useEffect, useState } from "react";
import ForecastTable from "./tables/ForecastTable";
import { HomePageContext } from "../HomePageContext";
import { getWeatherData } from "../services";
import { WeatherData } from "../services/types";
import ErrorComponent from "./errors/ErrorComponent";
import { AxiosError } from "axios";

export default function CurrentForecast() {
  const { cityName, temperatureUnit } = useContext(HomePageContext);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCityWeather = async () => {
      if (cityName) {
        try {
          const response = await getWeatherData(cityName, temperatureUnit);
          setWeatherData(response);
          setError(null);
        } catch (err: unknown) {
          console.error("Error fetching weather data:", err);

          if (err instanceof AxiosError) {
            setError(err.response?.data.message);
          } else {
            setError(
              "An unexpected error occurred while fetching weather data."
            );
          }
        }
      }
    };

    getCityWeather();
  }, [cityName, temperatureUnit]);

  if (error) return <ErrorComponent message={error} />;

  const weatherIconUrl = weatherData?.weather?.[0]?.icon
    ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    : null;

  return (
    <div className="w-full max-w-md md:max-w-lg lg:max-w-3xl p-4">
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              {weatherData?.name ?? "Unknown City"}
            </h1>
            <h4 className="text-stone-400 text-lg">
              Humidity: {weatherData?.main?.humidity ?? 0}%
            </h4>
          </div>
          <div className="text-4xl sm:text-5xl font-semibold">
            {weatherData?.main?.temp !== undefined
              ? `${weatherData.main.temp.toFixed(1)} ${
                  temperatureUnit === "imperial" ? "°F" : "°C"
                }`
              : "N/A"}
          </div>
        </div>

        {weatherIconUrl && (
          <div className="flex items-center justify-center h-20 sm:h-32 md:h-40">
            <img
              src={weatherIconUrl}
              alt={weatherData?.weather?.[0]?.description ?? "Weather icon"}
              className="object-contain h-full pl-8"
            />
          </div>
        )}
      </section>

      <section className="mt-6">
        <ForecastTable />
      </section>

      <section className="mt-6 flex flex-col p-4 sm:p-6 gap-4 bg-stone-100 w-full rounded-xl shadow-md">
        <div className="text-stone-400 font-semibold text-lg">
          AIR CONDITIONS
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-stone-400 flex items-center gap-2">
              <img
                src="/icons/thermometer.svg"
                alt="thermometer-icon"
                className="w-5 h-5"
              />
              <span>Real Feel</span>
            </div>
            <div className="text-2xl font-semibold">
              {weatherData?.main?.feels_like !== undefined
                ? `${weatherData.main.feels_like.toFixed(1)} ${
                    temperatureUnit === "imperial" ? "°F" : "°C"
                  }`
                : "N/A"}
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <div className="text-stone-400 flex items-center gap-2">
              <img src="/icons/wind.svg" alt="wind-icon" className="w-5 h-5" />
              <span>Wind</span>
            </div>
            <div className="text-[1.3rem] font-semibold">
              {weatherData?.wind?.speed !== undefined
                ? `${
                    temperatureUnit === "imperial"
                      ? (weatherData.wind.speed * 2.237).toFixed(1)
                      : weatherData.wind.speed.toFixed(1)
                  } ${temperatureUnit === "imperial" ? "mph" : "m/s"}`
                : "N/A"}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
