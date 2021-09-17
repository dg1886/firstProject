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
  color: #ce2d2d;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.25);
  font-family: 'Lato-Regular';
  font-style: normal;
  font-weight: 500;
  display: inline-block;
  letter-spacing: 0.05em;
`;
