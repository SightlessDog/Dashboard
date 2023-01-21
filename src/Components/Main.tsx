import * as React from "react";
import { Box } from "../Design/components/Box";
import { Text } from "../Design/components/Text";
import { Flex } from "../Design/components/Flex";
import { Link } from "../Design/components/Link";
import { Button } from "../Design/components/Button";
import { Grid } from "../Design/components/Grid";
import { Widget } from "../Design/components/Widget";
import { UVIndex } from "../custom/UVIndex";
import { WindStatus } from "../custom/WindStatus";
import { Sunrise } from "../custom/Sunrise";
import { Humidity } from "../custom/Humidity";
import { Visibility } from "../custom/Visibility";
import { Air } from "../custom/AirQuality";

export const Main = ({
  theme,
  setTheme,
  forecastData,
  windKph,
  windDirection,
  airQuality,
  visibility,
  humidity,
}) => {
  return (
    <Box color="secondary" css={{ padding: "2% 4%" }}>
      <Flex alignX="between" alignY="end" css={{ width: "100%" }}>
        <Flex gap="2">
          <Link label="Today" to="/Today" active={false} />
          <Link label="Week" to="/Week" active={true} />
        </Flex>
        <Flex gap="1" alignY="end">
          <Button
            shape="rounded"
            onClick={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
            css={{ height: "40px", width: "40px" }}
          >
            Dark
          </Button>
          <Button shape="rounded" css={{ height: "30px", width: "30px" }}>
            <Text css={{ fontWeight: "bold" }}>°C</Text>
          </Button>
          <Button shape="rounded" css={{ height: "30px", width: "30px" }}>
            <Text css={{ fontWeight: "bold" }}>°C</Text>
          </Button>
          <Button shape="squared">Profile pic</Button>
        </Flex>
      </Flex>
      <Flex direction="column" gap="3">
        <Grid
          css={{ width: "100%", marginTop: "100px", justifyItems: "center" }}
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
              state={data.day.condition.text}
              width="100px"
            />
          ))}
        </Grid>
        <Text color="primary" css={{ fontWeight: "bold" }} size="big">
          Today's Highlights
        </Text>
        <Grid gap="1" size="big">
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
  );
};
