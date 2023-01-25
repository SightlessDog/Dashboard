import { styled } from "@stitches/react";
import * as React from "react";

interface SearchIconProps {
  width: string;
  height: string;
}

export const SearchIcon: React.FC<SearchIconProps> = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 700 600"
    style={{
      color: "$primaryColor",
    }}
  >
    <path d="M471.44 146.2c-70.48-70.484-184.76-70.484-255.24 0-70.484 70.484-70.484 184.76 0 255.24 70.484 70.484 184.76 70.484 255.24 0 70.484-70.48 70.484-184.76 0-255.24zm-288.24-33c88.711-88.707 232.54-88.707 321.24 0 83.137 83.141 88.359 214.69 15.664 303.91l56.398 56.398c9.11 9.113 9.11 23.887 0 33-9.113 9.11-23.887 9.11-33 0l-56.398-56.398c-89.219 72.695-220.77 67.473-303.91-15.664-88.707-88.707-88.707-232.53 0-321.24z" />
  </svg>
);
