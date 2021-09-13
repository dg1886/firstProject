import React from 'react';
import { string } from 'prop-types';
import { WrapperInput } from './styled';

const Input = ({
  type, placeholder, width, height,
}) => (
  <WrapperInput
    width={width}
    height={height}
    type={type}
    placeholder={placeholder}
  />
);

Input.propTypes = {
  type: string,
  placeholder: string,
  width: string,
  height: string,
};
Input.defaultProps = {
  type: '',
  placeholder: '',
  width: '100%',
  height: '63px',
};

export default Input;
