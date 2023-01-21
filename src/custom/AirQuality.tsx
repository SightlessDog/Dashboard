import { styled } from "@stitches/react";
import * as React from "react";
import { Flex } from "../Design/components/Flex";
import { Text } from "../Design/components/Text";
import { ProgressIndicator } from "../Components/ProgressIndicator";

const Box = styled(Flex, {
  backgroundColor: "$primaryColor",
  flexDirection: "column",
  borderRadius: "10px",
  fontFamily: "$primaryFont",
  padding: "20px 40px",
});

export const Air: React.FC<{ airQuality: number }> = ({ airQuality }) => {
  return (
    <Box alignX="between">
      <Text color="secondary">Air quality</Text>
      <Flex alignY="center" alignX="between">
        <Text size="big" color="primary">
          {airQuality.toFixed()}
        </Text>
        <ProgressIndicator progress={airQuality / 5} />
      </Flex>
    </Box>
  );
};
