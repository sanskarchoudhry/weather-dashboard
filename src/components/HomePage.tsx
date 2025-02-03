import React, { useState } from "react";
import CityInput from "./CityInput";

export default function HomePage() {
  const [cityName, setCityName] = useState<string>("");

  const handleCityNameChange = (newCityName: string) => {
    setCityName(newCityName);
    console.log("City updated in HomePage:", newCityName);
  };

  return (
    <div>
      <CityInput cityName={cityName} onCityNameChange={handleCityNameChange} />
      <p>Selected City: {cityName}</p>
    </div>
  );
}
