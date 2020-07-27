import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const NavAuth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <NavAuth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <NavAuth.Screen name="SignIn" component={SignIn} />
    <NavAuth.Screen name="SignUp" component={SignUp} />
  </NavAuth.Navigator>
);

export default AuthRoutes;
