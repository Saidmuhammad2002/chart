import React, { useCallback, useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Wrapper } from "./chart-styles";
import CustomTooltip from "../tooltip/custom-tooltip";
const COLORS = ["#5700bbe2", "#00b4bded"];
const data = [
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

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;
  return (
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius + 5}
      outerRadius={outerRadius + 5}
      startAngle={startAngle - 0.5}
      endAngle={endAngle + 0.5}
      fill={fill}
    />
  );
};

export default function Chart({ activeIndex, setActiveIndex }) {
  const onPieEnter = (_, index) => setActiveIndex(index);

  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height={560}>
        <PieChart>
          <Pie
            cornerRadius={1}
            stroke="none"
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            innerRadius={"55%"}
            outerRadius={"98%"}
            dataKey="rate"
            onMouseEnter={onPieEnter}
            paddingAngle={1}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}
