import React, { useContext, useState } from "react";
import { HomePageContext } from "../HomePageContext";

export default function CityInput() {
  const { setCityName, setIsSearchTriggered } = useContext(HomePageContext);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputValue.trim() === "") return;
    setCityName(inputValue);
    setIsSearchTriggered(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex w-full max-w-md sm:max-w-lg md:max-w-xl bg-stone-100 rounded-lg shadow-md overflow-hidden">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter city name"
        className="flex-1 bg-transparent p-2 sm:p-3 text-stone-700 outline-none"
      />

      <button
        onClick={handleSearch}
        className="bg-stone-200 hover:bg-stone-300 transition p-2 sm:p-3 flex items-center justify-center w-12 sm:w-14 cursor-pointer"
      >
        <img
          src="/icons/search.svg"
          alt="Search"
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
      </button>
    </div>
  );
}
