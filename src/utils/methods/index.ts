import {
  DailyForecast,
  ForecastEntry,
  OpenWeatherResponse,
} from "../../services/types";

export const processFiveDayForecast = (
  data: OpenWeatherResponse
): DailyForecast[] => {
  const dailyForecast: Record<
    string,
    { temp: number[]; humidity: number[]; weather: string; icon: string }
  > = {};

  data.list.forEach((entry) => {
    const date = entry.dt_txt.split(" ")[0];
    if (!dailyForecast[date]) {
      dailyForecast[date] = {
        temp: [],
        humidity: [],
        weather: entry.weather[0].description,
        icon: entry.weather[0].icon,
      };
    }

    dailyForecast[date].temp.push(entry.main.temp);
    dailyForecast[date].humidity.push(entry.main.humidity);
  });

  return Object.keys(dailyForecast).map((date) => {
    const temps = dailyForecast[date].temp;
    const humidities = dailyForecast[date].humidity;

    return {
      date,
      avgTemp: parseFloat(
        (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1)
      ),
      avgHumidity: parseFloat(
        (humidities.reduce((a, b) => a + b, 0) / humidities.length).toFixed(1)
      ),
      weather: dailyForecast[date].weather,
      icon: dailyForecast[date].icon,
    };
  });
};

export const getCurrentDayForecast = (
  data: OpenWeatherResponse
): ForecastEntry[] => {
  const currentDate = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format

  return data.list.filter((entry) => entry.dt_txt.startsWith(currentDate));
};

export const formatDate = (date: string): string => {
  return date.split("-").slice(1).join("/");
};
