import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Onboarding from './Onboarding';

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode={'none'}>
      <AuthenticationStack.Screen name={'Onboarding'} component={Onboarding} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
