import React from "react";
import { Flex, Label, Population, Rate, Wrapper } from "./custom-tooltip-style";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const { rate, value, name } = payload[0].payload;
    return (
      <Wrapper>
        <Label>{name}</Label>
        <Flex>
          <Population>{value}</Population>
          <Rate>{rate}%</Rate>
        </Flex>
      </Wrapper>
    );
  }

  return null;
};

export default CustomTooltip;
