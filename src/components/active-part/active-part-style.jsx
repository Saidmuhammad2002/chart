import styled from "styled-components";
export const Wrapper = styled.div`
  padding: 18px 28px;
  background: linear-gradient(
    97.06deg,
    rgba(164, 57, 197, 0) -2.14%,
    #a439c5 100%
  );
  box-shadow: 0px 4px 25px -1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 30%;
  margin-left: 20px;
  @media (max-width: 1000px) {
    margin: auto;
  }
`;
export const Label = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin: 0;

  color: #ffffff;
`;
export const Population = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  margin: 0;

  color: #ffffff;
`;
export const Rate = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 61px;
  margin: 0;

  color: #ffffff;
  @media (max-width: 600px) {
    font-size: 40px;
  }
`;
export const Flex = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  gap: 2px;
`;
