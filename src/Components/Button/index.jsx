import React from 'react'

import { string } from 'prop-types';

import {WrapperButton} from './styled'



const Button = ({color, backgroundColor, text}) =>{
    return <WrapperButton color={color} backgroundColor={backgroundColor}>{text}</WrapperButton>
}

Button.propTypes = {
    color: string,
    backgroundColor: string,
    text: string,
}

Button.defaultProps = {
    color: '#f4f9f9',
    backgroundColor: '#006162',
    text: 'Submit'
}

export default Button;
