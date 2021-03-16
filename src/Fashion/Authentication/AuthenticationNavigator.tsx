import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export interface StackNavigationProps<ParamList extends ParamListBase, RouteName extends keyof ParamListBase = string> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

import Onboarding from './Onboarding';
import Welcome from './Welcome';

export type Routes = {
  Onboarding: undefined;
  Welcome: undefined;
};

const AuthenticationStack = createStackNavigator<Routes>();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode={'none'}>
      <AuthenticationStack.Screen name={'Onboarding'} component={Onboarding} />
      <AuthenticationStack.Screen name={'Welcome'} component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default AuthenticationNavigator;
