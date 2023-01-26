import {
  createContext,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { BrowserRouter, Routes, Route, useNavigation } from "react-router-dom";
import { GlobalStyle } from "./Design/utils";
import { darkTheme } from "./Design/utils";
import { Grid } from "./Design/components/Grid";
import { Main } from "./Components/Main";
import useWeather from "./hooks/useWeather";
import { space_squad_lat, space_squad_long } from "./utils";
import { Sidebar } from "./Components/Sidebar";
import { Box } from "./Design/components/Box";
import useWindowDimensions from "./hooks/useWindowDimensions";
import { useNavigate } from "react-router-dom";

interface Context {
  theme: string;
  setTheme: (newValue: string) => void;
  unit: string;
  setUnit: (newValue: string) => void;
  page: string;
  setPage: (newValue: string) => void;
}

export const Context = createContext<Context>({
  theme: "light",
  setTheme: () => {},
  unit: "C",
  setUnit: () => {},
  page: "week",
  setPage: () => {},
});
interface ThemeMap {
  light: string;
  dark: string;
}

const themeMap: ThemeMap = {
  light: "",
  dark: darkTheme.className,
};

function App() {
  GlobalStyle();
  const [theme, setTheme] = useState("light");
  const [unit, setUnit] = useState("C");
  const [page, setPage] = useState("week");
  const [weatherData, setWeatherData] = useWeather(
    space_squad_lat,
    space_squad_long,
    "7"
  );
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();

  useEffect(() => {
    if (width > 1024) {
      if (page != "week") {
        setPage("week");
        navigate("/");
      }
    }
  }, [width]);

  return (
    <Context.Provider value={{ theme, setTheme, unit, setUnit, page, setPage }}>
      <Grid
        className={themeMap[theme]}
        css={{
          width: "100%",
          minHeight: "100vh",

          "@media (min-width: 1024px)": {
            gridTemplateColumns: "1fr 4fr",
          },
        }}
      >
        {Object.keys(weatherData).length > 0 ? (
          <>
            <Box
              css={{
                "@media (max-width: 1024px)": {
                  minHeight: "100vh",
                  display: "none",
                },
              }}
            >
              <Sidebar
                temperature={weatherData.current.temp_c}
                temperatureF={weatherData.current.temp_f}
                state={weatherData.current.condition.text}
                chanceOfRain={
                  weatherData.forecast.forecastday[0].day.daily_chance_of_rain
                }
              />
            </Box>
            <Routes>
              <Route
                path="/Today"
                element={
                  <Sidebar
                    temperature={weatherData.current.temp_c}
                    temperatureF={weatherData.current.temp_f}
                    state={weatherData.current.condition.text}
                    chanceOfRain={
                      weatherData.forecast.forecastday[0].day
                        .daily_chance_of_rain
                    }
                  />
                }
              />
              <Route
                path="*"
                element={
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
                }
              />
            </Routes>
          </>
        ) : null}
      </Grid>
    </Context.Provider>
  );
}

export default App;
