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
    <div className=" flex flex-row w-full ">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter city name"
        className=" bg-stone-100 p-2 rounded-[8px] rounded-r-[0px] outline-none w-[90%]"
      />
      <button
        onClick={handleSearch}
        className="cursor-pointer bg-stone-100  p-2 pr-4 rounded-[8px] rounded-l-[0px]"
      >
        <img src="/icons/search.svg" alt="search-icon" />
      </button>
    </div>
  );
}
