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

  console.log(weatherData);

  const weatherIconUrl = weatherData?.weather?.[0]?.icon
    ? `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    : null;

  return (
    <div>
      <section>
        <div>
          <div>
            <h1>{weatherData?.name}</h1>
            <h4>Humidity: {weatherData?.main?.humidity || 0}%</h4>
          </div>
          <div>{weatherData?.main?.temp || "N/A"} °C</div>
        </div>
        <div>
          {weatherIconUrl && (
            <img
              src={weatherIconUrl}
              alt={weatherData?.weather[0].description}
              style={{ width: "100px" }}
            />
          )}
        </div>
      </section>
      <section>
        <ForecastTable />
      </section>
      <section>
        <div>AIR CONDITIONS</div>
        <section>
          <div>
            <div>
              <img src="/icons/thermometer.svg" alt="thermometer-icon" />
              Real Feel{" "}
            </div>
            <div>{weatherData?.main?.feels_like || "N/A"}</div>
          </div>
          <div>
            <div>
              <img src="/icons/wind.svg" alt="wind-icon" />
              Wind{" "}
            </div>
            <div>{weatherData?.wind?.speed || 0} km/hr</div>
          </div>
          <div>
            <div>
              <img src="/icons/droplet.svg" alt="rain-icon" />
              Chance of rain{" "}
            </div>
            <div>0%</div>
          </div>
          <div>
            <div>
              <img src="/icons/sun-medium.svg" alt="sun-icon" />
              UV index{" "}
            </div>
            <div>3</div>
          </div>
        </section>
      </section>
    </div>
  );
}
