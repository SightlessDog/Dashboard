import { createStitches, createTheme } from "@stitches/react";
import { black, blue, neutral } from "./colors";
import { primaryFont, secondaryFont } from "./typography";

export const stitches = createStitches({
  theme: {
    colors: {
      primaryColor: neutral[100],
      secondaryColor: neutral[200],
      primaryTextColor: black[200],
      secondaryTextColor: neutral[300],
      dividerColor: neutral[300],
      indicatorColor: blue[200],
    },
    fonts: {
      primaryFont: primaryFont,
      secondaryFont: secondaryFont,
    },
  },
});

export const darkTheme = createTheme("dark", {
  colors: {
    primaryColor: black[300],
    secondaryColor: black[100],
    primaryTextColor: neutral[200],
    secondaryTextColor: neutral[300],
    dividerColor: neutral[100],
    indicatorColor: blue[200],
  },
  fonts: {
    primaryFont: primaryFont,
    secondaryFont: secondaryFont,
  },
});
