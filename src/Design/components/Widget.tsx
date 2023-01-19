import * as React from "react";
import { styled } from "@stitches/react";

interface WidgetProps {
  title?: string;
}

const Box = styled("div", {
  backgroundColor: "$primaryColor",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  fontFamily: "$primaryFont",
});

export const NormalWidget: React.FC<WidgetProps> = ({
  title = "Normal Widget",
}) => {
  return (
    <Box>
      <h2>{title}</h2>
    </Box>
  );
};
