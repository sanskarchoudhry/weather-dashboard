import axios from "axios";
import envConfig from "../utils/configs/env";

export const getWeatherData = async (cityName: string) => {
  const response = await axios.get(
    `${envConfig.openWeatherUrl}weather?q=${cityName}&appid=${envConfig.openWeatherAPIKey}&units=metric`
  );
  return response.data;
};

export const getFutureForecast = async (cityName: string) => {
  const response = await axios.get(
    `${envConfig.openWeatherUrl}forecast?q=${cityName}&appid=${envConfig.openWeatherAPIKey}&units=metric`
  );
  return response;
};
