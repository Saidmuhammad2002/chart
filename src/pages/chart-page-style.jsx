import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 100vw;
  overflow: hidden;
  height: fit-content;
  box-sizing: border-box;
  padding: 58px 0 35px 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    /* max-height: 50%; */
    display: flex;
    padding: 16px 0;
    flex-direction: column;
    justify-content: center;
  }
`;
