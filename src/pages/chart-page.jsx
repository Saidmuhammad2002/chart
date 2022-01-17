import Chart from "../components/chart/chart";
import React, { useState } from "react";
import { Wrapper } from "./chart-page-style";
export const data = [
  { name: "Team", value: "2700M", rate: 24.3 },
  { name: "DEX Liquidity", value: "60M", rate: 0.5 },
  { name: "Ecosystem", value: "2100M", rate: 18.9 },
  { name: "Staking", value: "330M", rate: 3 },
  { name: "Foundation reserve", value: "2100M", rate: 18.9 },
  { name: "CEX", value: "180M", rate: 1.6 },
  { name: "Private sale", value: "900M", rate: 8.1 },
  { name: "Public sale", value: "360M", rate: 3.2 },
  { name: "Community", value: "2100M", rate: 18.9 },
  { name: "Advisors", value: "270M", rate: 2.4 },
];
const ChartPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Wrapper>
      <Chart activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </Wrapper>
  );
};

export default ChartPage;
