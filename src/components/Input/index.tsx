import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

type InputProps = Props & TextInputProps;

type Props = {
  name: string;
  icon: string;
};

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <Container>
    <Icon name={icon} size={20} color="#555360" />

    <TextInput
      keyboardAppearance="dark"
      placeholderTextColor="#555360"
      {...rest}
    />
  </Container>
);

export default Input;
