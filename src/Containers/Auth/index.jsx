import React, { useState } from 'react';

import { func } from 'prop-types';
import LoginForm from '../../Components/LoginForm';
import RegistrationForm from '../../Components/RegistrationForm';
import {
  Container, Header, PageWrapper, Tab,
} from './styled';

const types = ['Log In', 'Registration'];

const AuthPage = ({ setAuthDone }) => {
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
          {active === 'Log In' ? <LoginForm setAuthDone={setAuthDone} /> : <RegistrationForm setAuthDone={setAuthDone} />}
        </Container>
      </PageWrapper>
    </>
  );
};

AuthPage.propTypes = {
  setAuthDone: func,
};
AuthPage.defaultProps = {
  setAuthDone: () => {},
};
export default AuthPage;
