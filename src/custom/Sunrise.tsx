import { styled } from "@stitches/react";
import * as React from "react";
import { Flex } from "../Design/components/Flex";
import { Text } from "../Design/components/Text";
import { SunriseIcon } from "../Design/assets/icons/SunriseIcon";
import { SunsetIcon } from "../Design/assets/icons/SunsetIcon";

const Box = styled(Flex, {
  backgroundColor: "$primaryColor",
  flexDirection: "column",
  borderRadius: "10px",
  fontFamily: "$primaryFont",
  padding: "20px 40px",
});

export const Sunrise = ({ sunrise, sunset }) => {
  return (
    <Box alignX="between">
      <Text color="secondary">Sunrise & Sunset</Text>
      <Flex alignY="center" gap="1">
        <SunriseIcon width="50px" height="50px" />
        <Text color="primary" css={{ fontWeight: "500" }}>
          {sunrise}
        </Text>
      </Flex>
      <Flex alignY="center" gap="1">
        <SunsetIcon width="50px" height="50px" />
        <Text color="primary" css={{ fontWeight: "500" }}>
          {sunset}
        </Text>
      </Flex>
    </Box>
  );
};
