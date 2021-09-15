import React from 'react';
import { FormWrapper } from './styled';
import Button from '../Button';
import Input from '../Inputs/Input';
import Title from '../Title/Title';

const LoginForm = () => (
  <FormWrapper>
    <Title text="Login" fontSize="35px" />
    <Input type="email" placeholder="Email" />
    <Input type="password" placeholder="Password" />
    <Button text="Login" width="300px" backgroundColor="#006162" color="#f4f9f9" />
  </FormWrapper>
);

export default LoginForm;
