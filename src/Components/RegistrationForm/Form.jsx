import React from "react";
import {FormAreaWrapper, FormPageWrapper} from "./styled";
import Button from "../Button";
import {Input} from "../Inputs/Input";


const RegistrationForm = () => {
  return (
    <FormPageWrapper>
      <FormAreaWrapper>
        <Input type={'email'} placeholder={'Email'}/>
        <Button backgroundColor="red" color="black"/>
      </FormAreaWrapper>
    </FormPageWrapper>
  )
}

export default RegistrationForm;
