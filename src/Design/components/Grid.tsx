import { styled } from "@stitches/react";
import * as React from "react";

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  gridTemplateRows: "repeat(auto-fit, minmax(140px, 1fr))",
  variants: {
    size: {
      big: {
        gridTemplateColumns: "repeat(auto-fit, minmax(10%, 2fr))",
        gridTemplateRows: "repeat(auto-fit, minmax(50%, 1fr))",
      },
    },
    alignX: {
      between: {
        justifyContent: "space-between",
      },
      start: {
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
      center: {
        justifyContent: "center",
      },
    },
    alignY: {
      start: {
        alignItems: "flex-start",
      },
      end: {
        alignItems: "flex-end",
      },
      center: {
        alignItems: "center",
      },
    },
    gap: {
      1: {
        gap: "10px",
      },
      2: {
        gap: "30px",
      },
      3: {
        gap: "50px",
      },
    },
  },
});
