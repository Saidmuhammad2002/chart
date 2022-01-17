import styled from "styled-components";
import img from "../../assets/chart/Group.png";
import img1 from "../../assets/chart/Subtract.png";
import img2 from "../../assets/chart/triangles.png";

export const Wrapper = styled.div`
  max-width: 570px;
  width: 60%;
  height: 570px;
  background-image: url(${img}), url(${img1}), url(${img2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%, 95%, 56%;
  display: flex;
  tspan {
    font-size: 16px;
  }

  .recharts-surface {
    overflow: visible !important;
  }
  @media (max-width: 1100px) {
    margin: auto;
  }
  @media (max-width: 800px) {
    height: 100vmin;

    tspan {
      font-size: 12px;
    }
    margin: 0;
  }
`;
