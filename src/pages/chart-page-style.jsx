import styled from "styled-components";
export const Wrapper = styled.div`
  width: 100vw;
  height: fit-content;
  background: #010828;
  box-sizing: border-box;
  padding: 58px 102px 35px 53px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  > div {
    justify-self: center;
  }
  @media (max-width: 700px) {
    padding: 16px;
    flex-direction: column;
    justify-content: center;
  }
`;
