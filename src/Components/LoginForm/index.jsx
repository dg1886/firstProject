import React from 'react';
import { FormWrapper } from './styled';
import Button from '../Button';
import Input from '../Inputs/Input';
import Title from '../Title/Title';
import useForm from '../../Utils/useForm';
import validate from '../../Utils/validateInfo';
import { ErrorText } from '../RegistrationForm/styled';

const LoginForm = () => {
  const {
    handleChange, handleSubmit, values, errors, isInvalidForm,
  } = useForm(validate);
  console.log(values);
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Title text="Login" fontSize="35px" />
      <Input
        name="email"
        type="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <ErrorText>{errors.email}</ErrorText>}
      <Input
        name="password"
        type="password"
        placeholder="Password"
        value={values.email}
        onChange={handleChange}
      />
      {errors.password && <ErrorText>{errors.password}</ErrorText>}
      <Button disabled={isInvalidForm} type="submit" text="Login" width="300px" backgroundColor="#006162" color="#f4f9f9" />
    </FormWrapper>
  );
};

export default LoginForm;
