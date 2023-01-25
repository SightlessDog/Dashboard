import { styled } from "@stitches/react";
import * as React from "react";
import { Link } from "react-router-dom";

const StyledLink = styled(Link, {
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

export const CustomLink: React.FC<{
  label: string;
  to: string;
  active: boolean;
  onClick?: any;
}> = ({ label, to, active, onClick }) => {
  return (
    <StyledLink active={active} to={to} onClick={onClick}>
      {label}
    </StyledLink>
  );
};
