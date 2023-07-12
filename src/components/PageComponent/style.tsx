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

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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