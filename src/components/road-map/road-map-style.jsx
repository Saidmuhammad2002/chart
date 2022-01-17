import styled, { css } from "styled-components";
export const Wrapper = styled.div`
  height: 480px;
  width: 100vw;

  position: relative;
  overflow: hidden;
  .container {
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE 11 */
    scrollbar-width: none; /* Firefox 64 */
    display: grid;
    align-items: center;
    height: 480px;
    overflow-x: auto;
  }
`;
export const MainLine = styled.div`
  width: 180vmax;
  min-width: 1100px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(
    113.11deg,
    rgba(67, 30, 84, 0.2) -7.12%,
    rgba(153, 48, 239, 0.2) 6.76%,
    rgba(165, 61, 182, 0.2) 41.18%,
    rgba(203, 63, 89, 0.2) 83.7%
  );
  border-radius: 6px;
  border-radius: 6px;
`;
export const MouseHandle = styled.div`
  margin: auto;
  top: 0;
  bottom: 0;
  ${(props) =>
    props.end &&
    css`
      right: 0;
    `}
  height: 100%;
  position: absolute;
  width: 15%;
`;
