import React from 'react';

import { string, bool } from 'prop-types';

import { WrapperButton } from './styled';

const Button = ({
  color,
  backgroundColor,
  text,
  width,
  height,
  disabled,
}) => (
  <WrapperButton
    color={color}
    backgroundColor={backgroundColor}
    width={width}
    height={height}
    disabled={disabled}
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
  disabled: bool,
};

Button.defaultProps = {
  color: '#f4f9f9',
  backgroundColor: '#006162',
  text: 'Submit',
  width: '100%',
  height: '63px',
  disabled: false,
};

export default Button;
