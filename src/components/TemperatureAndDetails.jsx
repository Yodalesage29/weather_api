import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
  },
}) {
  return (
    <div>
      <div className="justify-center">
        {/* ICONE DU TEMPS */}
        <div className="flex items-stretch justify-center">
          <img src={iconUrlFromCode(icon)} width="15%" alt="Icône du temps" />
        </div>

        {/* Clouds, rain */}
        <div className="flex items-center justify-center py-6 text-xl font-bold text-purple-300">
          <p>{details}</p>
        </div>

        <div className="flex items-center justify-center text-white font-semibold">
          <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        </div>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
