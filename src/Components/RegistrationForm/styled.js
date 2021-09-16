import styled from 'styled-components';

export const FormWrapper = styled.form`
  width: 60%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ErrorText = styled.p`
  font-size: 1.1em;
  color: red;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.25);
`;
