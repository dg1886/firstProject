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
    color: 'red',
    backgroundColor: 'white',
    text: 'Submit'
}

export default Button;
