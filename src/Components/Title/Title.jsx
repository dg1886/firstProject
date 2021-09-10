import React from 'react'
import {TitleWrapper} from "./styled";
import {string} from 'prop-types'

export const Title = ({color, fontSize, text}) => {
  return <TitleWrapper color={color} fontSize={fontSize}>{text}</TitleWrapper>
}

Title.propTypes = {
  color: string,
  fontSize: string,
  text: string
}
Title.defaultProps = {
  color: '#282626',
  fontSize: '',
  text: 'Registration'
}