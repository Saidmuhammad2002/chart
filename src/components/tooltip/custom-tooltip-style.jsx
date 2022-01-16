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
  @media (max-width: 600px) {
    padding: 5px 7px;
  }
  border-radius: 10px;
`;
export const Label = styled.p`
  font-family: Century Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  margin: 0px;
  padding: 0px;
  /* identical to box height */

  color: #ffffff;
`;
export const Population = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin: 0px;
  padding: 0px;
  color: #ffffff;
`;
export const Rate = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  margin: 0px;
  padding: 0px;
  line-height: 31px;

  color: #ffffff;
`;
export const Flex = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 20px;
`;
