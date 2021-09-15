import React, { useState } from 'react';

import LoginForm from '../../Components/LoginForm';
import RegistrationForm from '../../Components/RegistrationForm';
import {
  Container, Header, PageWrapper, Tab,
} from './styled';

const types = ['Log In', 'Registration'];

const AuthPage = () => {
  const [active, setActive] = useState(types[0]);

  return (
    <>
      <PageWrapper>
        <Container>
          <Header>
            {types.map((type) => (
              <Tab
                key={type}
                active={active === type}
                onClick={() => setActive(type)}
              >
                {type}
              </Tab>
            ))}
          </Header>
          {active === 'Log In' ? <LoginForm /> : <RegistrationForm />}
        </Container>
      </PageWrapper>
    </>
  );
};

export default AuthPage;
