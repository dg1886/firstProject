import React from 'react';
import { string } from 'prop-types';
import { WrapperInput } from './styled';

const Input = ({ type, placeholder, width }) => (
  <WrapperInput
    type={type}
    placeholder={placeholder}
    width={width}
  />
);

Input.propTypes = {
  type: string,
  placeholder: string,
  width: string,
};
Input.defaultProps = {
  type: '',
  placeholder: '',
  width: '420px',
};

export default Input;
