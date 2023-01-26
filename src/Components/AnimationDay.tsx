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
import birds from "../Design/assets/sound/birds.wav";

import useSound from "use-sound";

export const AnimationOfDay: React.FC<{
  state: string;
  width?: string;
  height?: string;
}> = ({ state, width, height }) => {
  const [playBird, { stop }] = useSound(birds, { volume: 0.25 });

  return (
    <>
      {state == "Patchy moderate snow" ? (
        <Gif
          still={snowStill}
          animated={snow}
          width={width}
          height={height}
          playSound={playBird}
          stop={stop}
        />
      ) : state == "Moderate rain" ? (
        <Gif
          still={rainStill}
          animated={rain}
          width={width}
          height={height}
          playSound={playBird}
          stop={stop}
        />
      ) : state == "Partly cloudy" ? (
        <Gif
          still={cloudyStill}
          animated={cloudy}
          width={width}
          height={height}
          playSound={playBird}
          stop={stop}
        />
      ) : state == "Cloudy" ? (
        <Gif
          still={cloudsStill}
          animated={clouds}
          width={width}
          height={height}
          playSound={playBird}
          stop={stop}
        />
      ) : state == "Sunny" ? (
        <Gif
          still={sunStill}
          animated={sun}
          width={width}
          height={height}
          playSound={playBird}
          stop={stop}
        />
      ) : state == "Patchy rain possible" ? (
        <Gif
          still={drizzleStill}
          animated={drizzle}
          width={width}
          height={height}
          playSound={playBird}
          stop={stop}
        />
      ) : (
        <Gif
          still={puddleStill}
          animated={puddle}
          width={width}
          height={height}
          playSound={playBird}
          stop={stop}
        />
      )}
    </>
  );
};
