import React from "react";
import CurrentForecast from "./CurrentForecast";

export default function WeatherDashboard() {
  return (
    <section className="flex flex-row w-full">
      <CurrentForecast />
    </section>
  );
}
