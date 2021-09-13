import React from 'react';
import { PageWrapper, FormWrapper, InputsWrapper } from './styled';
import Button from '../Button';
import Input from '../Inputs/Input';
import Title from '../Title/Title';

const RegistrationForm = () => (
  <PageWrapper>
    <FormWrapper>
      <Title fontSize="35px" />
      <InputsWrapper>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm password" />
        <Button width="300px" backgroundColor="#006162" color="#f4f9f9" />
      </InputsWrapper>
    </FormWrapper>
  </PageWrapper>
);

export default RegistrationForm;
