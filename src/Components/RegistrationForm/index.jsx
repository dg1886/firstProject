import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Inputs/Input';
import Title from '../Title/Title';
import { FormWrapper } from './styled';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = () => {

  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Title fontSize="35px" />
      <Input
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        name="password2"
        type="password"
        placeholder="Confirm password"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <Button type="submit" width="300px" backgroundColor="#006162" color="#f4f9f9" />
    </FormWrapper>
  );
};

export default RegistrationForm;
