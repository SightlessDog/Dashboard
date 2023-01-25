import { styled } from "@stitches/react";
import * as React from "react";
import { Flex } from "../Design/components/Flex";
import { Text } from "../Design/components/Text";

const Box = styled(Flex, {
  backgroundColor: "$primaryColor",
  flexDirection: "column",
  borderRadius: "10px",
  fontFamily: "$primaryFont",
  padding: "20px 40px",
  height: "150px",
});

export const UVIndex: React.FC<{ index: string }> = ({ index }) => {
  return (
    <Box alignX="between">
      <Text color="secondary">UV Index</Text>

      <Text size="big" color="primary">
        {index}
      </Text>
    </Box>
  );
};
