import { styled } from "@stitches/react";
import * as React from "react";
import { Flex } from "../Design/components/Flex";
import { Text } from "../Design/components/Text";
import { blue } from "../Design/utils";
import { ProgressIndicator } from "../Components/ProgressIndicator";

const Box = styled(Flex, {
  backgroundColor: "$primaryColor",
  flexDirection: "column",
  borderRadius: "10px",
  fontFamily: "$primaryFont",
  padding: "20px 40px",
});

export const Humidity = ({ humidity }) => {
  return (
    <Box alignX="between">
      <Text color="secondary">humidity</Text>
      <Flex alignY="center" alignX="between">
        <Text size="big" color="primary">
          {humidity}%
        </Text>
        <ProgressIndicator progress={humidity} />
      </Flex>
    </Box>
  );
};
