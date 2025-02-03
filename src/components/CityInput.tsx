import React, { useContext, useState } from "react";
import { HomePageContext } from "../HomePageContext";

export default function CityInput() {
  const { setCityName, setIsSearchTriggered } = useContext(HomePageContext);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setCityName(inputValue);
    setIsSearchTriggered(true);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
