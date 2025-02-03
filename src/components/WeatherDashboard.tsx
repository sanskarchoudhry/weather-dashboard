import React from "react";
import CurrentForecast from "./CurrentForecast";
import FutureForecast from "./FutureForecast";

export default function WeatherDashboard() {
  return (
    <div>
      <section>
        <CurrentForecast />
        <FutureForecast />
      </section>
    </div>
  );
}
