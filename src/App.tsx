import { useState } from "react";
import { GlobalStyle } from "./Design/utils";
import { stitches, darkTheme } from "./Design/utils";
import { Widget } from "./Design/components/Widget";
import { Text } from "./Design/components/Text";
import { Grid } from "./Design/components/Grid";
import { Box } from "./Design/components/Box";
import { Flex } from "./Design/components/Flex";
import { Input } from "./Design/components/Input";
import sun from "./Design/assets/animations/sun.gif";
import sunStill from "./Design/assets/images/sun.png";
import puddle from "./Design/assets/animations/puddle.gif";
import puddleStill from "./Design/assets/images/puddle.png";
import clouds from "./Design/assets/animations/clouds.gif";
import cloudsStill from "./Design/assets/images/clouds.png";
import Gif from "./Design/components/Gif";
import { Link } from "./Design/components/Link";
import { Button } from "./Design/components/Button";
import { UVIndex } from "./custom/UVIndex";
import { WindStatus } from "./custom/WindStatus";
import { Sunrise } from "./custom/Sunrise";
import { Humidity } from "./custom/Humidity";
import { Visibility } from "./custom/Visibility";
import { Air } from "./custom/AirQuality";

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
  const [widgetArray, setWidgetArray] = useState([
    { i: "widget1", x: 0, y: 0, w: 1, h: 2 },
    { i: "widget2", x: 0, y: 0, w: 2, h: 2 },
  ]);

  return (
    <Grid className={themeMap[theme]} columns={2} css={{ height: "100vh" }}>
      <Flex
        color="primary"
        direction="column"
        gap="2"
        css={{
          height: "100%",
          width: "400px",
          paddingTop: "5%",
          paddingLeft: "5%",
        }}
      >
        <Input />
        <Gif still={sunStill} animated={sun} width="200px" height="200px" />
        <Flex alignY="start">
          <Text
            color="primary"
            size="xlbig"
            style={{ alignSelf: "flex-start" }}
          >
            12
          </Text>
          <Text color="primary" size="big" style={{ alignSelf: "flex-start" }}>
            °
          </Text>
          <Text color="primary" size="big" style={{ alignSelf: "flex-start" }}>
            C
          </Text>
        </Flex>
        <Flex alignY="baseline">
          <Text color="primary" size="big">
            Monday
          </Text>
          <Text color="secondary" size="medium">
            , 16:00
          </Text>
        </Flex>
        <Box
          css={{
            height: "2px",
            width: "300px",
            backgroundColor: "$dividerColor",
          }}
        />
        <Flex alignY="center" gap="1">
          <Gif
            still={cloudsStill}
            animated={clouds}
            width="50px"
            height="50px"
          />
          <Text color="primary" size="samll">
            mostly cloudy
          </Text>
        </Flex>
        <Flex alignY="center" gap="1">
          <Gif
            still={puddleStill}
            animated={puddle}
            width="50px"
            height="50px"
          />
          <Text color="primary" size="samll">
            Rain - 30%
          </Text>
        </Flex>
        <Text color="primary" size="big">
          Location
        </Text>
      </Flex>
      <Box color="secondary" css={{ padding: "2% 4%" }}>
        <Flex alignX="between" css={{ width: "100%" }}>
          <Flex gap="2">
            <Link label="Today" to="/Today" active={false} />
            <Link label="Week" to="/Week" active={true} />
          </Flex>
          <Flex gap="1">
            <Button
              shape="rounded"
              onClick={() =>
                theme === "light" ? setTheme("dark") : setTheme("light")
              }
              css={{ height: "40px", width: "40px" }}
            >
              Dark
            </Button>
            <Button shape="rounded" css={{ height: "40px", width: "40px" }}>
              °C
            </Button>
            <Button shape="rounded" css={{ height: "40px", width: "40px" }}>
              °F
            </Button>
            <Button shape="squared">Profile pic</Button>
          </Flex>
        </Flex>
        <Grid
          columns="7"
          css={{ width: "100%", marginTop: "100px", justifyItems: "center" }}
          alignX="center"
          alignY="center"
          gap="1"
        >
          <Widget title="Mon" />
          <Widget title="Mon" />
          <Widget title="Mon" />
          <Widget title="Mon" />
          <Widget title="Mon" />
          <Widget title="Mon" />
          <Widget title="Mon" />
        </Grid>
        <Text>Today's Highlights</Text>
        <Grid rows="2" columns="3" gap="1">
          <UVIndex />
          <WindStatus />
          <Sunrise />
          <Humidity />
          <Visibility />
          <Air />
        </Grid>
      </Box>
      {/* <NormalWidget /> */}
    </Grid>
  );
}

export default App;
