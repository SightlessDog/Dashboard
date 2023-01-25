import { globalCss } from "@stitches/react";
import { primaryFont } from "./typography";

export const GlobalStyle = globalCss({
  html: {
    boxSizing: "border-box",
    fontSize: "16px",
    height: "100%",
  },
  "* *:before *:after": {
    boxSizing: "inherit",
  },
  body: {
    margin: "0",
    padding: "0",
    fontFamily: `${primaryFont}`,
  },
  main: {
    width: "100%",
    margin: "0 0",
  },
});
