import { styled } from "@stitches/react";
import * as React from "react";

interface SearchIconProps {
  width: string;
  height: string;
  color?: string;
  direction: string;
}

const Container = styled("svg", {
  variants: {
    direction: {
      N: {
        transform: "rotate(316deg)",
      },
      NW: {
        transform: "rotate(267deg)",
      },
      W: {
        transform: "rotate(228deg)",
      },
      SW: {
        transform: "rotate(180deg)",
      },
      S: {
        transform: "rotate(136deg)",
      },
      SE: {
        transform: "rotate(87deg)",
      },
      E: {
        transform: "rotate(45deg)",
      },
      NE: {
        transform: "rotate(0deg)",
      },
    },
  },
});

export const CompassArrowIcon: React.FC<SearchIconProps> = ({
  width,
  height,
  color,
  direction,
}) => (
  <Container
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 700 550"
    fill={color}
    direction={direction}
    width={width}
    height={height}
  >
    <path d="m352.21 308.36 63.539 213.87c5.3828 21.328 35.539 21.758 41.566.65234l150.12-473.41c5.168-16.586-10.34-32.098-26.922-26.922l-474.28 150.34c-19.602 6.457-19.602 34.242 0 40.711l215.6 64.184 72.152-72.156c8.3984-8.4062 22.184-8.4062 30.586 0 8.3984 8.4023 8.3984 21.969 0 30.359zm127.07-200.53c23.691 0 43.078 19.172 43.078 43.078 0 23.695-19.383 43.078-43.078 43.078-23.906 0-43.078-19.383-43.078-43.078.003906-23.902 19.172-43.078 43.078-43.078z" />
  </Container>
);
