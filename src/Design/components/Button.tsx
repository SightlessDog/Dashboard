import { styled } from "@stitches/react";
import * as React from "react";

export const Button = styled("button", {
  boxShadow: "0px 0px 24px 6px $primaryTextColor",
  border: "none",
  variants: {
    shape: {
      rounded: {
        borderRadius: "99%",
        color: "$primaryTextColor",
        backgroundColor: "$primaryColor",
      },
      squared: {
        borderRadius: "10px",
        color: "$primaryTextColor",
        backgroundColor: "$primaryColor",
      },
    },
  },
  "&:hover": {
    backgroundColor: "$secondaryColor",
  },
  transition: "background-color 300ms linear",
});
