import React from "react";
import { Flex, Label, Population, Rate, Wrapper } from "./active-part-style";

const ActivePart = ({ name, value, rate }) => {
  return (
    <Wrapper>
      <Flex>
        <Label>{name}</Label>
        <Population>{value}</Population>
      </Flex>
      <Rate>{rate}%</Rate>
    </Wrapper>
  );
};

export default ActivePart;
