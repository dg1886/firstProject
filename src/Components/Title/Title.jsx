import React from 'react';
import { string } from 'prop-types';
import { TitleWrapper } from './styled';

const Title = ({ color, fontSize, text }) => (
  <TitleWrapper
    color={color}
    fontSize={fontSize}
  >
    {text}
  </TitleWrapper>
);

Title.propTypes = {
  color: string,
  fontSize: string,
  text: string,
};
Title.defaultProps = {
  color: '#282626',
  fontSize: '',
  text: 'Registration',
};

export default Title;
