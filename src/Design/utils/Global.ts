import { globalCss } from "@stitches/react";
import { primaryFont } from "./typography";

export const GlobalStyle = globalCss({
  html: {
    boxSizing: "border-box",
    fontSize: "16px",
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
    width: "90%",
    margin: "0 auto",
  },
});
