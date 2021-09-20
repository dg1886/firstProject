import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import Input from '../Inputs/Input';
import Title from '../Title/Title';
import { FormWrapper } from './styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleSubmit = () => {
    if (email && password) {
      history.push('/');
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Title text="Login" fontSize="35px" />
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
      <Button type="submit" text="Login" width="300px" backgroundColor="#006162" color="#f4f9f9" />
    </FormWrapper>
  );
};

export default LoginForm;
