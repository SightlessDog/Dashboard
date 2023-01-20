import { styled } from "@stitches/react";
import * as React from "react";
import { SunIcon } from "../assets/icons/SunIcon";
import { MoonIcon } from "../assets/icons/MoonIcon";
import { Flex } from "./Flex";

const ToggleWrapper = styled("label", {
  width: "130px",
  display: "block",
});

const Toggle = styled("div", {
  height: "45px",
  width: "110px",
  background: "black",
  borderRadius: " 40px",
  padding: "12px",
  position: "relative",
  margin: "auto",
  cursor: "pointer",
  "&::before": {
    content: "",
    display: "block",
    height: "41px",
    width: "41px",
    borderRadius: "30px",
    background: "white",
    position: "absolute",
    zIndex: 2,
    transform: "translate(0)",
    transition: "transform",
  },
  variants: {
    state: {
      enabled: {
        "&::before": {
          transform: "translateX(65px)",
        },
      },
      disabled: {},
    },
  },
});

const ToggleInput = styled("input", {
  position: "absolute",
  top: 0,
  opacity: 0,
});

const HiddenSpan = styled("span", {
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
});

export default function ThemeToggle() {
  const [isEnabled, setIsEnabled] = React.useState(false);

  React.useEffect(() => {
    console.log("TODO more on this later");
  }, [isEnabled]);

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
  };

  return (
    <ToggleWrapper htmlFor="toggle">
      <Toggle state={isEnabled ? "enabled" : "disabled"}>
        <HiddenSpan>{isEnabled ? "Enable" : "Disable"}</HiddenSpan>
        <Flex
          alignX="between"
          alignY="center"
          css={{
            height: "100%",
            margin: "0 5px",
            "&.svg": {
              fill: "white",
              height: "30px",
              width: "30px",
              zIndex: 0,
            },
          }}
        >
          <SunIcon />
          <MoonIcon />
        </Flex>
        <ToggleInput
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={isEnabled}
          onClick={toggleState}
        />
      </Toggle>
    </ToggleWrapper>
  );
}
