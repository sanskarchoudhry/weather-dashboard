import { createContext } from "react";

interface HomePageContextType {
  cityName: string;
  setCityName: React.Dispatch<React.SetStateAction<string>>;
  isSearchTriggered: boolean;
  setIsSearchTriggered: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HomePageContext = createContext<HomePageContextType>({
  cityName: "",
  setCityName: () => {},
  isSearchTriggered: false,
  setIsSearchTriggered: () => {},
});
