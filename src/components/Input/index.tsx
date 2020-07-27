import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

type InputProps = Props & TextInputProps;

type Props = {
  name: string;
  icon: string;
};

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <Container>
    <TextInput
      keyboardAppearance="dark"
      placeholderTextColor="#555360"
      {...rest}
    />
  </Container>
);

export default Input;
