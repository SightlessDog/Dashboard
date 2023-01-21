import { useState, useEffect } from "react";
import { handleIncomingWeatherResult } from "../utils";

interface State {
  // define the shape of the state object here
}

interface Props {
  lat: string;
  long: string;
  days?: string;
}

function useWeather(
  lat: Props["lat"],
  long: Props["long"],
  days?: Props["days"]
): [State, (newState: State) => void] {
  const [state, setState] = useState<State>({});

  const url = days
    ? `${import.meta.env.VITE_API_URL}/forecast.json?key=${
        import.meta.env.VITE_API_KEY
      }&q= ${lat} ${long}&days=${days}&aqi=yes`
    : `${import.meta.env.VITE_API_URL}/current.json?key=${
        import.meta.env.VITE_API_KEY
      }&q= ${lat} ${long}&aqi=yes`;

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch(url)
          .then((res) => res.json())
          .then((result) => {
            setState(result);
            console.log(result);
          });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [lat, long, days]);

  return [state, setState];
}

export default useWeather;
