import { styled } from "@stitches/react";
import * as React from "react";

const IndicatorContainer = styled("div", {
  width: "20px",
  height: "100px",
  borderRadius: "20px",
  overflow: "hidden",
  border: "2px solid $dividerColor",
  position: "relative",
});

const Indicator = styled("div", {
  width: "15px",
  height: "15px",
  borderRadius: "50%",
  backgroundColor: "$indicatorColor",
  left: "13%",
  position: "absolute",
});

export const ProgressIndicator: React.FC<{ progress: number }> = ({
  progress,
}) => {
  return (
    <IndicatorContainer>
      <Indicator
        css={{
          top: 100 - progress,
        }}
      />
    </IndicatorContainer>
  );
};
