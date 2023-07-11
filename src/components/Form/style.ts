import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const ButtonStyle = styled.button<{ disabled: boolean }>`
  width: 12rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: #ffffff;
  background: #1877f2;
  border-radius: 0.5rem;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputStyle = styled.input`
  width: 90%;
  max-width: 30rem;
  height: 2.5rem;
  margin-bottom: 1rem;
  border: 1px solid #cecece;
  border-radius: 0.3rem;
  padding: 0.6rem;
  font-size: 1rem;
  font-weight: 300;
  color: #000;
`;

export const LabelStyle = styled.label`
  width: 90%;
  max-width: 30rem;
  margin-bottom: 0.3rem;
  font-size: 1.2rem;
  color: #000;
`;

export const Container = styled.div`
  width: 13rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
`;
