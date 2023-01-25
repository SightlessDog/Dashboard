import { styled } from "@stitches/react";
import * as React from "react";

export const Button = styled("button", {
  boxShadow: "0px 0px 24px 6px $primaryTextColor",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "$secondaryColor",
  },
  variants: {
    shape: {
      rounded: {
        borderRadius: "50%",
        color: "$primaryTextColor",
        backgroundColor: "$primaryColor",
        padding: "10px",
      },
      squared: {
        borderRadius: "10px",
        color: "$primaryTextColor",
        backgroundColor: "$primaryColor",
      },
    },
    active: {
      true: {
        backgroundColor: "$primaryTextColor",
        color: "$primaryColor",
        "&:hover": {
          backgroundColor: "$primaryTextColor",
        },
      },
    },
  },
  transition: "background-color 300ms linear",
});
