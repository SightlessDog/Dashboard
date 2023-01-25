import * as React from "react";
import { Box } from "../Design/components/Box";
import { Text } from "../Design/components/Text";
import { styled } from "@stitches/react";
import { Flex } from "../Design/components/Flex";

const Container = styled(Flex, {
  flexDirection: "column",
  backgroundColor: "$primaryColor",
  borderRadius: "10px",
});

export const Citation = ({ citation }) => {
  return (
    <Container css={{ height: "auto", padding: "10px" }} gap="2">
      <Text color={"primary"} size="big" css={{ fontWeight: "bold" }}>
        Quote of the day
      </Text>
      <Text color={"primary"}>{citation.quote}</Text>
      <Text color={"secondary"}>- {citation.author}</Text>
    </Container>
  );
};
