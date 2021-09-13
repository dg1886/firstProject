import React from 'react';
import { string } from 'prop-types';
import { WrapperInput, Wrapper } from './styled';

const Input = ({
  type, placeholder, width, height,
}) => (
  <Wrapper width={width} height={height}>
    <WrapperInput
      type={type}
      placeholder={placeholder}
    />
  </Wrapper>
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
  height: '',
};

export default Input;
