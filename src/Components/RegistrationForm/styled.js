import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(222, 220, 220, 0.78);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.form`
    height: 80%;
    width: 50%;
    background-color: #eff3f3;
    border-radius: 8px;
    box-shadow: 5px 5px 16px 2px rgba(14, 29, 52, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const InputsWrapper = styled.div`
    width: 60%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;
