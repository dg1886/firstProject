import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(222, 220, 220, 0.78);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 80%;
  width: 50%;
  background-color: #eff3f3;
  border-radius: 8px;
  box-shadow: 5px 5px 16px 2px rgba(14, 29, 52, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
`;

export const Tab = styled.button`
  width: 50%;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  border-radius: 8px 0px 0px 0px;
  outline: 0;
  ${({ active }) => active
  && `
    border-bottom: 2px solid #006162;
    opacity: 1;
    border-radius: 8px 0px 0px 0px;
  `}
  font-family: 'Lato-Bold';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;
