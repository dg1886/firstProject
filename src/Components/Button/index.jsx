import React from 'react';

import { string } from 'prop-types';

import { WrapperButton } from './styled';

const Button = ({
  color,
  backgroundColor,
  text,
  width,
  height,
}) => (
  <WrapperButton
    color={color}
    backgroundColor={backgroundColor}
    width={width}
    height={height}
  >
    {text}
  </WrapperButton>
);

Button.propTypes = {
  color: string,
  backgroundColor: string,
  text: string,
  width: string,
  height: string,
};

Button.defaultProps = {
  color: '#f4f9f9',
  backgroundColor: '#006162',
  text: 'Submit',
  width: '100%',
  height: '63px',
};

export default Button;
