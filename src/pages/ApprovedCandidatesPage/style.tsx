import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "Alkatra", cursive;
  margin-top: 2rem;
  text-align: center;
`;

export const BackToHome = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  cursor: pointer;

  p {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    font-family: 700;
    text-decoration: underline;
    color: #000;
  }
`;

export const CandidatesContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Candidate = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #cecece;
  padding: 1rem;
  margin: 0.5rem 0;
`;

export const Label = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  font-weight: bold;
`;

export const Code = styled.h3`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Name = styled.h3`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const EmptyList = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  color: #000;
  margin-top: 5rem;
  text-align: center;
`;
