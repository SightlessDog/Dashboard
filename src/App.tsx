import { useState } from "react";
import { GlobalStyle } from "./Design/utils";
import { stitches, darkTheme } from "./Design/utils";
import { NormalWidget } from "./Design/components/Widget";
import { Text } from "./Design/components/Text";
import { Grid } from "./Design/components/Grid";
import { Box } from "./Design/components/Box";
import { Flex } from "./Design/components/Flex";
import { Input } from "./Design/components/Input";

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
      <Flex color="primary" direction="column" gap="2" css={{ height: "100%" }}>
        <Input />
        <Text color="primary" size="big">
          Sunny or not
        </Text>
        <Text color="primary" size="big">
          degs
        </Text>
        <Text color="primary" size="big">
          day and time
        </Text>
        <Text color="primary" size="big">
          divider
        </Text>
        <Text color="primary" size="big">
          mostly cloudy
        </Text>
        <Text color="primary" size="big">
          Rain
        </Text>
        <Text color="primary" size="big">
          Location
        </Text>
      </Flex>
      <Flex alignX="between" color="secondary" css={{ height: "5%" }}>
        <Flex>
          <Text>Today</Text>
          <Text>Week</Text>
        </Flex>
        <Flex>
          <button onClick={() => setTheme("dark")}>Dark</button>
          <Text>deg</Text>
          <Text>fahr</Text>
          <Text>Profile pic</Text>
        </Flex>
      </Flex>
      {/* <NormalWidget /> */}
    </Grid>
  );
}

export default App;
