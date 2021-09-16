import React from 'react';
import { FormWrapper } from './styled';
import Button from '../Button';
import Input from '../Inputs/Input';
import Title from '../Title/Title';
import useForm from '../../Utils/useForm';
import validate from '../../Utils/validateInfo';

const RegistrationForm = () => {
  const {
    handleChange, handleSubmit, values, errors, isInvalidForm,
  } = useForm(validate);
  console.log(errors);
  return (
    <FormWrapper onSubmit={handleSubmit} noValidate>
      <Title fontSize="35px" />
      <Input
        name="email"
        type="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}
      <Input
        name="password"
        type="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}
      <Input
        name="password2"
        type="password"
        placeholder="Confirm password"
        value={values.password2}
        onChange={handleChange}
      />
      {errors.password2 && <p>{errors.password2}</p>}
      <Button disabled={isInvalidForm} type="submit" width="300px" backgroundColor="#006162" color="#f4f9f9" />
    </FormWrapper>
  );
};

export default RegistrationForm;
