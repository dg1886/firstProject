import React from 'react';
import { PageWrapper, FormWrapper } from './styled';
import Button from '../Button';
import Input from '../Inputs/Input';
import Title from '../Title/Title';

const RegistrationForm = () => (
  <PageWrapper>
    <FormWrapper>
      <Title fontSize="2em" />
      <Input width="600px" type="email" placeholder="Email" />
      <Input width="600px" type="password" placeholder="Password" />
      <Input width="600px" type="password" placeholder="Confirm password" />
      <Button width="300px" backgroundColor="#006162" color="#f4f9f9" />
    </FormWrapper>

  </PageWrapper>
);

export default RegistrationForm;
