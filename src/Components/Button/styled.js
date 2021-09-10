import styled from 'styled-components'

export const WrapperButton = styled.button`
  display: inline-block;
  width: 276px;
  height: 63px;
  background-color: ${p => p.backgroundColor};
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  color: ${p => p.color};
  font-style: normal;
  font-weight: 500;
  font-size: 1.4em;
  letter-spacing: 0.05em;
  &:hover {
    -webkit-box-shadow: 0px 0px 3px rgba(74, 72, 72, 0);
  }
  &:active {
    -webkit-box-shadow: 0px 0px 3px rgba(75, 73, 73, 0.9);
    -moz-box-shadow: 0px 0px 3px rgba(75, 73, 73);
    box-shadow: 0px 0px 3px rgb(75, 73, 73);
  }
`