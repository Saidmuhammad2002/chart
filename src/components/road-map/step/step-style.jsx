import styled from "styled-components";
import Bg from "../../../assets/roadmap/bg.png";
export const Info = styled.div`
p{
    margin: 0;
}
  width: max-content;
  max-width: 190px;
  margin-left: 9px;
  padding: 9px 15px;
  position: relative;
  background-clip: padding-box;
  background: url(${Bg}),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(224, 249, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    ),
    black;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -3px;
    border-radius: inherit;
    background: radial-gradient(80.38% 222.5% at -13.75% -12.36%, #1DA5AD 0%, rgba(255, 255, 255, 0) 100%),
radial-gradient(80.69% 208.78% at 108.28% 112.58%, #4D3658 0%, rgba(135, 38, 183, 0) 100%);
  }
  background-blend-mode: overlay, normal;
  box-shadow:2px 16px 19px rgba(0, 0, 0, 0.09)); 
  font-family: Century Gothic;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;
  border-radius: 12px;



`;
export const Line = styled.div`
  height: 212.86px;
  width: 3px;
  background-color: #b23a9d;
  margin: 0px 4px;
`;
export const Dot = styled.div`
  width: 27.19px;
  height: 27.19px;
  left: 614.24px;
  top: 5811.11px;
  border-radius: 50%;
  background: #b23a9d;
  display: flex;
  align-items: end;
  justify-content: center;
`;
export const Triangle = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: max-content;
  height: 0;
  border-top: 25px solid transparent;
  border-left: 50px solid #b23a9d;
  border-bottom: 25px solid transparent;
  margin-left: 7px;
  margin-right: 11px;
`;
export const DotOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54.39px;
  height: 54.39px;
  border-radius: 50%;

  background: linear-gradient(
    180deg,
    rgba(178, 58, 157, 0.1) 0%,
    rgba(195, 63, 110, 0) 100%
  );
  :hover {
    background-color: rgba(178, 58, 157, 0.1);
    width: 54.39px;
    height: 54.39px;
    box-shadow: 0px 0px 12px #ff4581;
  }
`;
export const YearInfo = styled.h2`
  width: max-content;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  position: absolute;
  color: #ffffff;
  bottom: -45px;
  p {
    margin: 0;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: ${(props) => (props.rotate ? "rotateX(180deg)" : "rotateX(0deg)")};
  ${Info},${YearInfo} {
    p {
      transform: ${(props) =>
        props.rotate ? "rotateX(180deg)" : "rotateX(0deg)"};
    }
  }
`;
