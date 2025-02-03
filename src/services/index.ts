import axios from "axios";
import envConfig from "../utils/configs/env";

export const getWeatherData = async (cityName: string) => {
  const response = await axios.get(
    `${envConfig.openWeatherUrl}weather?q=${cityName}&appid=${envConfig.openWeatherAPIKey}`
  );
  return response.data;
};
