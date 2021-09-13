import styled from 'styled-components';

export const TitleWrapper = styled.h3`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  display: inline-block;
  letter-spacing: 0.05em;
  color: ${(p) => p.color};
  font-size: ${(p) => p.fontSize};

`;
