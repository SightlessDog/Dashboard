import * as React from "react";
import { styled } from "@stitches/react";
import { Flex } from "./Flex";
import { Text } from "./Text";
import { getTheDay } from "../../utils";
import { AnimationOfDay } from "../../Components/AnimationDay";

interface WidgetProps {
  width?: string;
  maxTemp: string;
  minTemp: string;
  state: string;
  day: Date;
}

const WidgetBox = styled(Flex, {
  backgroundColor: "$primaryColor",
  borderRadius: "10px",
  fontFamily: "$primaryFont",
  padding: "20px 40px",
});

export const Widget: React.FC<WidgetProps> = ({
  width,
  maxTemp,
  minTemp,
  state,
  day,
}) => {
  return (
    <WidgetBox
      alignX="center"
      alignY="center"
      direction="column"
      gap="1"
      css={{ width: width }}
    >
      <Text>{getTheDay(new Date(day).getDay())}</Text>
      <AnimationOfDay state={state} />
      <Flex direction="row" gap="1">
        <Text>{maxTemp}°</Text>
        <Text color="secondary">{minTemp}°</Text>
      </Flex>
    </WidgetBox>
  );
};
