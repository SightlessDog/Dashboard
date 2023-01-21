import * as React from "react";
import { Flex } from "../Design/components/Flex";
import { Text } from "../Design/components/Text";
import { Input } from "../Design/components/Input";
import Gif from "../Design/components/Gif";
import { Box } from "../Design/components/Box";
import puddle from "../Design/assets/animations/puddle.gif";
import puddleStill from "../Design/assets/images/puddle.png";
import clouds from "../Design/assets/animations/clouds.gif";
import cloudsStill from "../Design/assets/images/clouds.png";
import sun from "../Design/assets/animations/sun.gif";
import sunStill from "../Design/assets/images/sun.png";
import useWeather from "../hooks/useWeather";
import { space_squad_lat, space_squad_long } from "../utils";

interface Sidebarprops {
  temperature: string;
  state: string;
  chanceOfRain: string;
}

export const Sidebar: React.FC<Sidebarprops> = ({
  temperature,
  state,
  chanceOfRain,
}) => {
  return (
    <Flex
      color="primary"
      direction="column"
      gap="2"
      css={{
        height: "100%",
        width: "400px",
        paddingTop: "5%",
        paddingLeft: "5%",
      }}
    >
      <Input />
      <Gif still={sunStill} animated={sun} width="200px" height="200px" />
      <Flex alignY="start">
        <Text color="primary" size="xlbig" style={{ alignSelf: "flex-start" }}>
          {temperature}
        </Text>
        <Text color="primary" size="big" style={{ alignSelf: "flex-start" }}>
          °
        </Text>
        <Text color="primary" size="big" style={{ alignSelf: "flex-start" }}>
          C
        </Text>
      </Flex>
      <Flex alignY="baseline">
        <Text color="primary" size="big">
          Monday
        </Text>
        <Text color="secondary" size="medium">
          , 16:00
        </Text>
      </Flex>
      <Box
        css={{
          height: "2px",
          width: "300px",
          backgroundColor: "$dividerColor",
        }}
      />
      <Flex alignY="center" gap="1">
        <Gif still={cloudsStill} animated={clouds} width="50px" height="50px" />

        <Text color="primary" size="samll">
          {state}
        </Text>
      </Flex>
      <Flex alignY="center" gap="1">
        <Gif still={puddleStill} animated={puddle} width="50px" height="50px" />
        <Text color="primary" size="samll">
          Rain - {chanceOfRain}%
        </Text>
      </Flex>
      <Text color="primary" size="big">
        Location
      </Text>
    </Flex>
  );
};
