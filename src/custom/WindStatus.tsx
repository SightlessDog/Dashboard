import { styled } from "@stitches/react";
import * as React from "react";
import { Flex } from "../Design/components/Flex";
import { Text } from "../Design/components/Text";
import { CompassArrowIcon } from "../Design/assets/icons/CompassArrow";

const Box = styled(Flex, {
  backgroundColor: "$primaryColor",
  flexDirection: "column",
  borderRadius: "10px",
  fontFamily: "$primaryFont",
  padding: "20px 40px",
});

const Container = styled(Flex, {
  borderRadius: "50%",
  width: "20px",
  height: "20px",
  padding: "10px",
  backgroundColor: "white",
  border: "2px solid $dividerColor",
});

export const WindStatus = ({ windKph, direction }) => {
  return (
    <Box alignX="between">
      <Text color="secondary">Wind Status</Text>
      <Text color="primary" css={{ fontWeight: "bold" }}>
        {windKph} km/h
      </Text>
      <Flex alignY="center" gap="1">
        <Container alignX="center" alignY="center">
          <CompassArrowIcon width="50px" height="50px" direction={direction} />
        </Container>
        <Text color="primary" size="big">
          {direction}
        </Text>
      </Flex>
    </Box>
  );
};
