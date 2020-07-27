import React from 'react';
import { View, StatusBar } from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => (
  <>
    <StatusBar backgroundColor="#312e38" barStyle="light-content" />
    <View style={{ flex: 1, backgroundColor: '#312e38' }}></View>
  </>
);

export default App;
