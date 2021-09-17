import React from 'react';
import { string, func } from 'prop-types';
import { WrapperInput } from './styled';

const Input = ({
  type, placeholder, width, height, onChange, name,
}) => (
  <WrapperInput
    width={width}
    height={height}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    name={name}
  />
);

Input.propTypes = {
  type: string,
  placeholder: string,
  width: string,
  height: string,
  onChange: func,
  name: string,
};
Input.defaultProps = {
  type: '',
  placeholder: '',
  width: '100%',
  height: '63px',
  onChange: () => {},
  name: '',
};

export default Input;
