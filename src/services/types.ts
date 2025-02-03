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
