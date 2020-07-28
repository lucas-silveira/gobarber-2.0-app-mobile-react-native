import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #232129;
  padding: 0 16px;
  border-radius: 10px;
  margin-bottom: 8px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-family: 'RobotoSlab-Regular';
  color: #fff;
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
