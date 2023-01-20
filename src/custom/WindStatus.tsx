import { styled } from "@stitches/react";
import * as React from "react";
import { Flex } from "../Design/components/Flex";
import { Text } from "../Design/components/Text";

const Box = styled(Flex, {
  backgroundColor: "$primaryColor",
  borderRadius: "10px",
  fontFamily: "$primaryFont",
  padding: "20px 40px",
});

export const WindStatus = () => {
  return (
    <Box alignX="start">
      <Text color="secondary">Wind Status</Text>
      <Text>7.70 km/h</Text>
      <Text>direction</Text>
    </Box>
  );
};
