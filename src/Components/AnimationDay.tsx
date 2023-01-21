import * as React from "react";
import Gif from "../Design/components/Gif";
import puddle from "../Design/assets/animations/puddle.gif";
import puddleStill from "../Design/assets/images/puddle.png";
import clouds from "../Design/assets/animations/clouds.gif";
import cloudsStill from "../Design/assets/images/clouds.png";
import cloudy from "../Design/assets/animations/cloudy.gif";
import cloudyStill from "../Design/assets/images/cloudy.png";
import drizzle from "../Design/assets/animations/drizzle.gif";
import drizzleStill from "../Design/assets/images/drizzle.png";
import rain from "../Design/assets/animations/rain.gif";
import rainStill from "../Design/assets/images/rain.png";
import snow from "../Design/assets/animations/snow.gif";
import snowStill from "../Design/assets/images/snow.png";
import sun from "../Design/assets/animations/sun.gif";
import sunStill from "../Design/assets/images/sun.png";

export const AnimationOfDay: React.FC<{ state: string }> = ({ state }) => {
  return (
    <>
      {state == "Patchy moderate snow" ? (
        <Gif still={snowStill} animated={snow} width="50px" height="50px" />
      ) : state == "Moderate rain" ? (
        <Gif still={rainStill} animated={rain} width="50px" height="50px" />
      ) : state == "Partly cloudy" ? (
        <Gif still={cloudyStill} animated={cloudy} width="50px" height="50px" />
      ) : state == "Cloudy" ? (
        <Gif still={cloudsStill} animated={clouds} width="50px" height="50px" />
      ) : state == "Sunny" ? (
        <Gif still={sunStill} animated={sun} width="50px" height="50px" />
      ) : state == "Patchy rain possible" ? (
        <Gif
          still={drizzleStill}
          animated={drizzle}
          width="50px"
          height="50px"
        />
      ) : (
        <Gif still={puddleStill} animated={puddle} width="50px" height="50px" />
      )}
    </>
  );
};
