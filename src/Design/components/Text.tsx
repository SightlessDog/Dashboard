import * as React from "react";
import { styled } from "@stitches/react";
import { typeScale } from "../utils";

export const Text = styled("div", {
  fontFamily: "$primaryFont",
  variants: {
    size: {
      small: {
        fontSize: `${typeScale.helperText}`,
      },
      medium: {
        fontSize: `${typeScale.header3}`,
      },
      big: {
        fontSize: `${typeScale.header1}`,
      },
    },
    color: {
      primary: {
        color: "$primaryTextColor",
      },
      secondary: {
        color: "$secondaryTextColor",
      },
      indicator: {
        color: "$indicatorColor",
      },
    },
  },
});
