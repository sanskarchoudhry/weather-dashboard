import React from "react";
import CurrentForecast from "./CurrentForecast";

export default function WeatherDashboard() {
  return (
    <section className="flex flex-col md:flex-row w-full items-center md:items-start">
      <CurrentForecast />
    </section>
  );
}
