import { createContext } from "react";

export type HomePageContextType = {
  cityName: string;
  setCityName: (city: string) => void;
  isSearchTriggered: boolean;
  setIsSearchTriggered: (trigger: boolean) => void;
  temperatureUnit: "metric" | "imperial";
  toggleTemperatureUnit: () => void;
};

export const HomePageContext = createContext<HomePageContextType>({
  cityName: "",
  setCityName: () => {},
  isSearchTriggered: false,
  setIsSearchTriggered: () => {},
  temperatureUnit: "metric",
  toggleTemperatureUnit: () => {},
});
