import { styled } from "@stitches/react";
import * as React from "react";
import { Box } from "./Box";

export const Flex = styled(Box, {
  display: "flex",
  variants: {
    direction: {
      row: {
        flexDirection: "row",
      },
      column: {
        flexDirection: "column",
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
