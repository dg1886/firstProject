import React from 'react';
import { FormAreaWrapper, FormPageWrapper } from './styled';
import Button from '../Button';
import Input from '../Inputs/Input';
import Title from '../Title/Title';

const RegistrationForm = () => (
  <FormPageWrapper>
    <FormAreaWrapper>
      <Title fontSize="2em" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm password" />
      <Button backgroundColor="#006162" color="#f4f9f9" />
    </FormAreaWrapper>
  </FormPageWrapper>
);

export default RegistrationForm;
