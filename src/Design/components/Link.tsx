import { styled } from "@stitches/react";
import * as React from "react";

const StyledLink = styled("a", {
  backgroundColor: "none",
  color: "$secondaryTextColor",
  fontWeight: "bold",
  textDecoration: "none",
  padding: "0px 4px",
  "&:hover": {
    color: "$primaryTextColor",
  },
  transition: "color 300ms linear",
  variants: {
    active: {
      true: {
        borderBottom: "2px solid black",
        color: "$primaryTextColor",
      },
      false: {},
    },
  },
});

export const Link: React.FC<{ label: string; to: string; active: boolean }> = ({
  label,
  to,
  active,
}) => {
  return (
    <StyledLink active={active} href={to}>
      {label}
    </StyledLink>
  );
};
