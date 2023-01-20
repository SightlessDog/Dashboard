import * as React from "react";
import { styled } from "@stitches/react";
import { Flex } from "./Flex";
import { Text } from "./Text";
import puddle from "../assets/animations/puddle.gif";
import puddleStill from "../assets/images/puddle.png";
import Gif from "./Gif";

interface WidgetProps {
  title?: string;
  width?: string;
}

const WidgetBox = styled(Flex, {
  backgroundColor: "$primaryColor",
  borderRadius: "10px",
  fontFamily: "$primaryFont",
  padding: "20px 40px",
});

export const Widget: React.FC<WidgetProps> = ({ title = "Widget", width }) => {
  return (
    <WidgetBox
      alignX="center"
      alignY="center"
      direction="column"
      gap="1"
      css={{ width: width }}
    >
      <Text>{title}</Text>
      <Gif still={puddleStill} animated={puddle} width="50px" height="50px" />
      <Flex direction="row" gap="1">
        <Text>15°</Text>
        <Text color="secondary">3°</Text>
      </Flex>
    </WidgetBox>
  );
};
