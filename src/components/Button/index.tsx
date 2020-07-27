import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

type ButtonProps = Props & RectButtonProperties;

type Props = {
  children: string;
};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
