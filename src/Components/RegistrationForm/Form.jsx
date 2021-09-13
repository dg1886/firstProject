import React from 'react';
import { FormAreaWrapper, FormPageWrapper } from './styled';
import { DivWrapper } from '../Div/styled';
import Button from '../Button';
import Input from '../Inputs/Input';
import Title from '../Title/Title';

const RegistrationForm = () => (
  <FormPageWrapper>
    <FormAreaWrapper>
      <Title fontSize="2em" />
      <DivWrapper width="20%">
        <Input type="email" placeholder="Email" />
      </DivWrapper>
      <DivWrapper width="50%">
        <Input type="password" placeholder="Password" />
      </DivWrapper>
      <DivWrapper width="50%" display="flex">
        <Input type="password" placeholder="Confirm password" />
      </DivWrapper>
      <DivWrapper width="50%">
        <Button backgroundColor="#006162" color="#f4f9f9" />
      </DivWrapper>
    </FormAreaWrapper>
  </FormPageWrapper>
);

export default RegistrationForm;
