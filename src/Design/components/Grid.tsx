import { styled } from "@stitches/react";
import * as React from "react";

export const Grid = styled("div", {
  display: "grid",
  gridTemplateRows: "1fr",
  variants: {
    columns: {
      2: {
        gridTemplateColumns: "1fr 2fr",
      },
      3: {
        gridTemplateColumns: "repeat(3, 1fr)",
      },
      4: {
        gridTemplateColumns: "repeat(4, 1fr)",
      },
      5: {
        gridTemplateColumns: "repeat(5, 1fr)",
      },
      6: {
        gridTemplateColumns: "repeat(6, 1fr)",
      },
      7: {
        gridTemplateColumns: "repeat(7, 1fr)",
      },
    },
    rows: {
      2: {
        gridTemplateRows: "1fr 2fr",
      },
      3: {
        gridTemplateRows: "repeat(3, 1fr)",
      },
      4: {
        gridTemplateRows: "repeat(4, 1fr)",
      },
      5: {
        gridTemplateRows: "repeat(5, 1fr)",
      },
      6: {
        gridTemplateRows: "repeat(6, 1fr)",
      },
      7: {
        gridTemplateRows: "repeat(7, 1fr)",
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
