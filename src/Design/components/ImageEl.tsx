import * as React from "react";
import { styled } from "@stitches/react";
import { Box } from "./Box";
import { Text } from "./Text";

const ImageContainer = styled(Box, {
  position: "relative",
  variants: {
    size: {
      big: {
        width: "75%",
        height: "10%",
      },
      small: {
        height: "35px",
        width: "35px",
      },
    },
  },
});

const LocationText = styled(Text, {
  position: "absolute",
  transform: "translateY(-50%) translateX(-50%)",
  top: "50%",
  left: "50%",
  fontWeight: "bold",
  color: "white",
});

export const ImageEl = ({ location, image, size }) => {
  return (
    <ImageContainer size={size}>
      <img
        src={image}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          boxShadow: "inset 0 0 10px 10px #000",
        }}
      />
      <div
        style={{
          position: "absolute",
          borderRadius: "10px",
          width: "100%",
          height: "100%",
          backgroundColor: "#442222",
          opacity: "0.3",
          top: "0%",
          left: "0%",
        }}
      />
      <LocationText>{location}</LocationText>
    </ImageContainer>
  );
};
