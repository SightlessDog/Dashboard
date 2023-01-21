import { useState } from "react";
import { GlobalStyle } from "./Design/utils";
import { stitches, darkTheme } from "./Design/utils";
import { Grid } from "./Design/components/Grid";

import Gif from "./Design/components/Gif";
import { Main } from "./Components/Main";
import useWeather from "./hooks/useWeather";
import { space_squad_lat, space_squad_long } from "./utils";
import { Sidebar } from "./Components/Sidebar";

interface ThemeMap {
  light: string;
  dark: string;
}

const themeMap: ThemeMap = {
  light: "",
  dark: darkTheme.className,
};

const { styled } = stitches;

function App() {
  GlobalStyle();
  const [theme, setTheme] = useState("light");
  const [weatherData, setWeatherData] = useWeather(
    space_squad_lat,
    space_squad_long,
    "7"
  );

  Object.keys(weatherData).length
    ? console.log(Object.keys(weatherData).length)
    : null;

  return (
    <Grid className={themeMap[theme]} columns={2} css={{ height: "100vh" }}>
      {Object.keys(weatherData).length > 0 ? (
        <>
          <Sidebar
            temperature={weatherData.current.temp_c}
            state={weatherData.current.condition.text}
            chanceOfRain={
              weatherData.forecast.forecastday[0].day.daily_chance_of_rain
            }
          />
          <Main
            theme={theme}
            setTheme={setTheme}
            forecastData={weatherData.forecast.forecastday}
            windKph={weatherData.current.wind_kph}
            windDirection={weatherData.current.wind_dir}
            airQuality={weatherData.current.air_quality.co}
            visibility={weatherData.current.vis_km}
            humidity={weatherData.current.humidity}
          />
        </>
      ) : null}

      {/* <NormalWidget /> */}
    </Grid>
  );
}

export default App;
