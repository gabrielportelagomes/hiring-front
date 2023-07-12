import styled from "styled-components";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  color: #000;
  text-align: center;
`;

export const ExclamationIcon = styled(BsFillExclamationTriangleFill)`
  font-size: 8rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin: 1rem 0;
`;

export const TextLink = styled.div`
  font-size: 1.5rem;
  margin: 4rem 0;
  a {
    color: inherit;
    cursor: pointer;
    text-decoration: underline;
  }
`;
