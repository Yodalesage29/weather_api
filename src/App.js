import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Decision from "./components/Decision";
import { UilBasketball, UilTvRetro, UilBackpack } from '@iconscout/react-unicons'; 

function App() {
  const [query, setQuery] = useState({ q: "calais" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-slate-600 from-slate-900 to-slate-700`} >
      <TopButtons setQuery={setQuery}/> 
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />

          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />

          <div className="flex flex-row items-stretch justify-between space-x-2 text-white text-sm pt-8 pb-1">
            <p className="flex justify-center"> <UilBackpack/> : ballade </p>
            <p className="flex justify-center"> <UilBasketball/> : sport </p>
            <p className="flex justify-center"> <UilTvRetro/> : maison </p>
          </div>
          
          <Decision title="décision par heure" items={weather.hourly} />
          <Decision title="décision par jour" items={weather.daily} />
        </div>
      )}
    </div>
  );
}

export default App;
