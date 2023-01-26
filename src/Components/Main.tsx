import * as React from "react";
import { Box } from "../Design/components/Box";
import { Text } from "../Design/components/Text";
import { Flex } from "../Design/components/Flex";
import { Grid } from "../Design/components/Grid";
import { Widget } from "../Design/components/Widget";
import { UVIndex } from "../custom/UVIndex";
import { WindStatus } from "../custom/WindStatus";
import { Sunrise } from "../custom/Sunrise";
import { Humidity } from "../custom/Humidity";
import { Visibility } from "../custom/Visibility";
import { Air } from "../custom/AirQuality";
import { Context } from "../App";
import spaceSquadbg from "../Design/assets/images/bg.jpg";
import spaceSquadbgNighty from "../Design/assets/images/nightybg.jpg";
import astro from "../Design/assets/images/astro.png";
import useQuote from "../hooks/useQuote";
import { Citation } from "./CitationElement";
import { Nav } from "./Nav";
import useSound from "use-sound";

export const Main = ({
  forecastData,
  windKph,
  windDirection,
  airQuality,
  visibility,
  humidity,
}) => {
  const [quote, setQuote] = useQuote();

  return (
    <Context.Consumer>
      {({ theme, setTheme, unit, setUnit }) => (
        <Box
          color="secondary"
          css={{
            padding: "0% 4% 0% 4%",
            height: "100%",
            backgroundImage: `url(${
              theme == "dark" ? spaceSquadbgNighty : spaceSquadbg
            })`,
            backgroundSize: "cover",
          }}
        >
          <Box
            css={{
              position: "absolute",
              backgroundImage: `url(${astro})`,
              backgroundSize: "cover",
              width: "300px",
              height: "300px",
              left: "0%",
              top: "35%",
              zIndex: "0",
              "@media (min-width: 1024px)": {
                transform: "translateY(-100%)",
                top: "100%",
              },
            }}
          />
          <Nav />
          <Flex direction="column" gap="3" css={{ position: "relative" }}>
            <Box css={{ marginTop: "100px" }}>
              {Object.keys(quote).length > 0 ? (
                <Citation citation={quote.contents.quotes[0]} />
              ) : null}
            </Box>
            <Text color="primary" css={{ fontWeight: "bold" }} size="big">
              Week's Forecast
            </Text>
            <Grid
              css={{
                justifyItems: "center",
              }}
              alignX="center"
              alignY="center"
              gap="2"
            >
              {forecastData.map((data, i) => (
                <Widget
                  key={i}
                  day={data.date}
                  minTemp={data.day.mintemp_c}
                  maxTemp={data.day.maxtemp_c}
                  minTempF={data.day.mintemp_f}
                  maxTempF={data.day.maxtemp_f}
                  state={data.day.condition.text}
                  unit={unit}
                  width="100px"
                />
              ))}
            </Grid>
            <Text color="primary" css={{ fontWeight: "bold" }} size="big">
              Today's Highlights
            </Text>
            <Grid gap="1" alignX="center">
              <UVIndex index={forecastData[0].day.uv} />
              <WindStatus windKph={windKph} direction={windDirection} />
              <Sunrise
                sunrise={forecastData[0].astro.sunrise}
                sunset={forecastData[0].astro.sunset}
              />
              <Humidity humidity={humidity} />
              <Visibility visibility={visibility} />
              <Air airQuality={airQuality} />
            </Grid>
          </Flex>
        </Box>
      )}
    </Context.Consumer>
  );
};
