import React from "react";
import { getWeatherData } from "../services";

interface CityInputProps {
  cityName: string;
  onCityNameChange: (cityName: string) => void;
}

export default function CityInput({
  cityName,
  onCityNameChange,
}: CityInputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCityNameChange(event.target.value);
  };

  const getCityData = async () => {
    await getWeatherData(cityName);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="cityName"
          id="city-name"
          value={cityName}
          onChange={handleInputChange}
        />
        <button
          type="button"
          onClick={() => {
            console.log(getCityData());
          }}
        >
          <img src="/search.svg" alt="search-icon" />
        </button>
      </form>
    </div>
  );
}
