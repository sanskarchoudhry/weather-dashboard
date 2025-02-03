import React, { useState } from "react";
import CityInput from "./CityInput";
import WeatherDashboard from "./WeatherDashboard";

export default function HomePage() {
  const [cityName, setCityName] = useState<string>("");

  const handleCityNameChange = (newCityName: string) => {
    setCityName(newCityName);
    console.log("City updated in HomePage:", newCityName);
  };

  return (
    <div>
      <CityInput cityName={cityName} onCityNameChange={handleCityNameChange} />
      <WeatherDashboard />
    </div>
  );
}
