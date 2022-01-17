import React from "react";
import {
  Dot,
  DotOuter,
  Info,
  Line,
  Triangle,
  Wrapper,
  YearInfo,
} from "./step-style";

const Step = ({ rotate, year, info }) => {
  return (
    <Wrapper rotate={rotate}>
      <DotOuter>
        <Dot>
          <Line>
            <Triangle>
              <Info rotate>
                <p>{info}</p>
              </Info>
            </Triangle>
          </Line>
        </Dot>
      </DotOuter>
      <YearInfo>
        <p>{year}</p>
      </YearInfo>
    </Wrapper>
  );
};

export default Step;
