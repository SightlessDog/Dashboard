import { styled } from "@stitches/react";
import * as React from "react";
import { Flex } from "../Design/components/Flex";
import { Text } from "../Design/components/Text";
import Gif from "../Design/components/Gif";
import eyesAnimated from "../Design/assets/animations/eyes.gif";
import eyesStill from "../Design/assets/images/eyes.png";

const Box = styled(Flex, {
  backgroundColor: "$primaryColor",
  flexDirection: "column",
  borderRadius: "10px",
  fontFamily: "$primaryFont",
  padding: "20px 40px",
});

export const Visibility = ({ visibility }) => {
  return (
    <Box alignX="between">
      <Text color="secondary">Visibility</Text>
      <Gif still={eyesStill} animated={eyesAnimated} width="100px" />
      <Text color="primary">{visibility} km</Text>
    </Box>
  );
};
