import * as React from "react";
import { Flex } from "../Design/components/Flex";
import { CustomLink } from "../Design/components/Link";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { Button } from "../Design/components/Button";
import { Text } from "../Design/components/Text";
import { ImageEl } from "../Design/components/ImageEl";
import { Context } from "../App";
import spaceSquad from "../Design/assets/images/spacesquad.jpg";
import click from "../Design/assets/sound/click.wav";
import useSound from "use-sound";

export const Nav = () => {
  const [playClick] = useSound(click, {
    volume: 0.25,
  });
  return (
    <Context.Consumer>
      {({ theme, setTheme, unit, setUnit, page, setPage }) => (
        <Flex
          alignX="between"
          alignY="end"
          css={{
            width: "100%",
            marginTop: "2%",
          }}
        >
          <Flex
            gap="2"
            css={{
              "@media (min-width: 1024px)": {
                visibility: "hidden",
              },
            }}
          >
            <CustomLink
              label="Today"
              to="/Today"
              active={page == "today"}
              onClick={() => setPage("today")}
            />
            <CustomLink
              label="Week"
              to="/Week"
              active={page == "week"}
              onClick={() => setPage("week")}
            />
          </Flex>
          <Flex gap="1" alignY="end">
            <DarkModeToggle
              mode={theme}
              size="sm"
              inactiveTrackColor="#e2e8f0"
              inactiveTrackColorOnHover="#f8fafc"
              inactiveTrackColorOnActive="#cbd5e1"
              activeTrackColor="#334155"
              activeTrackColorOnHover="#1e293b"
              activeTrackColorOnActive="#0f172a"
              inactiveThumbColor="#1e293b"
              activeThumbColor="#e2e8f0"
              onChange={(mode) => {
                theme === "light" ? setTheme("dark") : setTheme("light");
                playClick();
              }}
            />
            <Button
              active={unit == "C"}
              shape="rounded"
              css={{ height: "30px", width: "30px" }}
              onClick={() => setUnit("C")}
            >
              <Text css={{ fontWeight: "bold" }}>°C</Text>
            </Button>
            <Button
              active={unit == "F"}
              onClick={() => setUnit("F")}
              shape="rounded"
              css={{ height: "30px", width: "30px" }}
            >
              <Text css={{ fontWeight: "bold" }}>°F</Text>
            </Button>
            <ImageEl size="small" image={spaceSquad} />
          </Flex>
        </Flex>
      )}
    </Context.Consumer>
  );
};
