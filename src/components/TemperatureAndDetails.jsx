import React from "react";
import { UilTemperature, UilTear, UilWind, UilSun, UilSunset } from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="justify-center">
        {/* ICONE DU TEMPS */}
        <div className="flex items-stretch justify-center">
          <img src={iconUrlFromCode(icon)} width="15%" alt="Icône du temps"/>
        </div>

        {/* Clouds, rain */}
        <div className="flex items-center justify-center py-6 text-xl font-bold text-purple-300"> 
          <p>{details}</p>
        </div> 
        
        <div className="flex items-center justify-center text-white font-semibold">
          <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        </div>
      </div>


      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm pt-8 pb-1">
          <div className="flex font-light text-sm">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
            <p className="font-light ml-1">|</p>
          </div>
          <div className="flex font-light text-sm">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
            <p className="font-light ml-1">|</p>
          </div>
          <div className="flex font-light text-sm">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-1">
        <UilSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
