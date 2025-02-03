export interface WeatherData {
  name: string;
  main: {
    humidity: number;
    temp: number;
    feels_like: number;
  };
  wind: {
    speed: number;
  };
  weather: [{ id: number; main: string; description: string; icon: string }];
}

export interface ForecastEntry {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: [{ id: number; main: string; description: string; icon: string }];
}

export interface OpenWeatherResponse {
  list: ForecastEntry[];
}

export interface DailyForecast {
  date: string;
  avgTemp: number;
  avgHumidity: number;
  weather: string;
  icon: string;
}

export interface ErrorComponentProps {
  message: string;
}
