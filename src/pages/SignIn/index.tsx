import React from 'react';
import { Image } from 'react-native';

import logotipo from '../../assets/img/logo.png';

import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logotipo} />
    </Container>
  );
};

export default SignIn;
