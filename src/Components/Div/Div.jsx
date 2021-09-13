import React from 'react';
import { string } from 'prop-types';
import { DivWrapper } from './styled';

const Div = ({
  width, height, position, display,
}) => (
  <DivWrapper
    width={width}
    height={height}
    position={position}
    display={display}
  />
);

Div.propTypes = {
  width: string,
  height: string,
  position: string,
  display: string,
};
Div.defaultProps = {
  width: '100%',
  height: '',
  position: '',
  display: 'flex',
};

export default Div;
