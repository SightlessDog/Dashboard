import { useState } from "react";
import { GlobalStyle } from "./Design/utils";
import { stitches, darkTheme } from "./Design/utils";
import { NormalWidget } from "./Design/components/Widget";
import { Text } from "./Design/components/Text";
import { Grid } from "./Design/components/Grid";
import { Box } from "./Design/components/Box";

interface ThemeMap {
  light: string;
  dark: string;
}

const themeMap: ThemeMap = {
  light: "",
  dark: darkTheme.className,
};

const { styled } = stitches;

const Container = styled("div", {
  alignItems: "center",
  backgroundColor: "$primaryColor",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  width: "100vw",
});

function App() {
  GlobalStyle();
  const [theme, setTheme] = useState("light");
  const [widgetArray, setWidgetArray] = useState([
    { i: "widget1", x: 0, y: 0, w: 1, h: 2 },
    { i: "widget2", x: 0, y: 0, w: 2, h: 2 },
  ]);

  return (
    <Grid className={themeMap[theme]} columns={2} css={{ height: "100vh" }}>
      <Box css={{ height: "100%" }}>
        <Text color="primary" size="big">
          Hello World
        </Text>
      </Box>
      <Box>
        <button onClick={() => setTheme("dark")}>Dark</button>
      </Box>
      {/* <NormalWidget /> */}
    </Grid>
  );
}

export default App;
