import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Onboarding from './Onboarding';
import Welcome from './Welcome';

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode={'none'}>
      <AuthenticationStack.Screen name={'Onboarding'} component={Onboarding} />
      <AuthenticationStack.Screen name={'Welcome'} component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
