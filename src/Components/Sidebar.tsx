import * as React from "react";
import { Flex } from "../Design/components/Flex";
import { Text } from "../Design/components/Text";
import { Input } from "../Design/components/Input";
import Gif from "../Design/components/Gif";
import { Box } from "../Design/components/Box";
import puddle from "../Design/assets/animations/puddle.gif";
import puddleStill from "../Design/assets/images/puddle.png";
import { Context } from "../App";
import { ImageEl } from "../Design/components/ImageEl";
import spaceSquad from "../Design/assets/images/spacesquad.jpg";
import spaceSquadbg from "../Design/assets/images/BackgroundCoverColor.png";
import spaceSquadbgNighty from "../Design/assets/images/BackgroundCoverColorNighty.png";
import { AnimationOfDay } from "./AnimationDay";
import { getTheDay } from "../utils";
import { Nav } from "./Nav";

interface Sidebarprops {
  temperature: string;
  temperatureF: string;
  state: string;
  chanceOfRain: string;
}

export const Sidebar: React.FC<Sidebarprops> = ({
  temperature,
  temperatureF,
  state,
  chanceOfRain,
}) => {
  const [dateState, setDateState] = React.useState(new Date());

  React.useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <Context.Consumer>
      {({ unit, theme }) => (
        <Flex
          direction="column"
          gap="2"
          css={{
            padding: "0% 4% 0% 4%",
            height: "100%",
            backgroundImage: `url(${
              theme == "dark" ? spaceSquadbgNighty : spaceSquadbg
            })`,
            backgroundSize: "cover",
          }}
        >
          <Box
            css={{
              "@media (min-width: 1024px)": {
                display: "none",
              },
            }}
          >
            <Nav />
          </Box>
          <Flex
            alignY="center"
            direction="column"
            gap="2"
            css={{
              padding: "8% 4% 0%",
              "@media (min-width: 1024px)": {
                alignItems: "flex-start",
                width: "400px",
                paddingTop: "5%",
                paddingLeft: "5%",
              },
            }}
          >
            <Input />
            <AnimationOfDay width="200px" height="auto" state={state} />
            <Flex alignY="start">
              <Text
                color="primary"
                size="xlbig"
                style={{ alignSelf: "flex-start" }}
              >
                {unit == "C" ? temperature : temperatureF}
              </Text>
              <Text
                color="primary"
                size="big"
                style={{ alignSelf: "flex-start" }}
              >
                °
              </Text>
              <Text
                color="primary"
                size="big"
                style={{ alignSelf: "flex-start" }}
              >
                {unit == "C" ? "C" : "F"}
              </Text>
            </Flex>
            <Flex alignY="baseline">
              <Text color="primary" size="big">
                {getTheDay(dateState.getDay())}
              </Text>
              <Text color="secondary" size="medium">
                ,{" "}
                {dateState.toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
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
              <AnimationOfDay width="50px" state={state} />
              <Text color="primary" size="samll">
                {state}
              </Text>
            </Flex>
            <Flex alignY="center" gap="1">
              <Gif
                still={puddleStill}
                animated={puddle}
                width="50px"
                height="50px"
              />
              <Text color="primary" size="samll">
                Rain - {chanceOfRain}%
              </Text>
            </Flex>
            <ImageEl location="Berlin, Germany" size="big" image={spaceSquad} />
          </Flex>
        </Flex>
      )}
    </Context.Consumer>
  );
};
