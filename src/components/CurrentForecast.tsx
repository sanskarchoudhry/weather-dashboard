import React from "react";
import ForecastTable from "./ForecastTable";

export default function CurrentForecast() {
  return (
    <div>
      <section>
        <div>
          <div>
            <h1>Bengaluru</h1>
            <h4>Humidity: 0%</h4>
          </div>
          <div>26</div>
        </div>
        <div>Image of weather</div>
      </section>
      <section>
        <ForecastTable />
      </section>
      <section>
        <div>AIR CONDITIONS</div>
        <section>
          <div>
            <div>
              <img src="/thermometer.svg" alt="thermometer-icon" />
              Real Feel{" "}
            </div>
            <div>30</div>
          </div>
          <div>
            <div>
              <img src="/wind.svg" alt="wind-icon" />
              Wind{" "}
            </div>
            <div>0.2 km/hr</div>
          </div>
          <div>
            <div>
              <img src="/droplet.svg" alt="rain-icon" />
              Chance of rain{" "}
            </div>
            <div>0%</div>
          </div>
          <div>
            <div>
              <img src="/sun-medium.svg" alt="sun-icon" />
              UV index{" "}
            </div>
            <div>3</div>
          </div>
        </section>
      </section>
    </div>
  );
}
