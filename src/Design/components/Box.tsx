import { styled } from "@stitches/react";
import * as React from "react";

export const Box = styled("div", {
  variants: {
    color: {
      primary: { backgroundColor: "$primaryColor" },
      secondary: {
        backgroundColor: "$secondaryColor",
      },
    },
  },
});
