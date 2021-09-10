import React from 'react'
import {WrapperInput} from "./styled";
import {string} from 'prop-types'


export const Input = ({type, placeholder}) => {
    return <WrapperInput type={type} placeholder={placeholder}/>
}

Input.propTypes = {
    type: string,
    placeholder: string,
}
Input.defaultProps = {
    type: '',
    placeholder: '',
}