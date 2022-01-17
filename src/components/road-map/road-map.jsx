import React, { useRef, useState } from "react";
import { MainLine, MouseHandle, Wrapper } from "./road-map-style";
import Step from "./step/step";

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
const dataInfo = [
  {
    year: "Q3 2021",
    info: "Team Formation Creator Community of 10,000 Product Research & Design Whitepaper",
  },
  {
    year: "Q4 2021",
    info: "Genesis Mercado  NFT Beta Launch Cr8 Token : Private Sale ",
  },
  {
    year: "Q1 2022",
    info: "Console Content & IP Layer Multichain NFT Protocol Cr8 Token launch",
  },
  {
    year: "Q2 2022",
    info: "Creator Defi Create Fan Ecosystem Create platform APIs Public",
  },
  {
    year: "Q3 2022",
    info: "90+ cDapps live on Create 120 million USD in cumulative trading volume and api calls",
  },
  { year: "Q4 2022", info: "Ecosystem fund opens" },
];
const RoadMap = () => {
  const ref = useRef(null);
  const scrollTo = (end) => {
    ref.current &&
      ref.current.children[end ? dataInfo.length - 1 : 0].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
  };

  return (
    <Wrapper>
      <div className="container">
        <MouseHandle onMouseOver={() => scrollTo()} />
        <MainLine ref={ref}>
          {dataInfo.map((item, index) => (
            <Step rotate={index % 2 === 0} info={item.info} year={item.year} />
          ))}
        </MainLine>
        <MouseHandle end onMouseOver={() => scrollTo(true)} />
      </div>
    </Wrapper>
  );
};

export default RoadMap;
