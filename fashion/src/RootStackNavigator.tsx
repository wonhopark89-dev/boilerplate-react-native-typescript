import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RootScreen from '~/RootScreen';
// Fashion Project
import AuthenticationNavigator from '~/Fashion/Authentication/AuthenticationNavigator';
export type RootStackParamList = {
  RootScreen: undefined;
  FashionRootScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={'RootScreen'} headerMode={'none'}>
      <RootStack.Screen name={'RootScreen'} component={RootScreen} />
      <RootStack.Screen name={'FashionRootScreen'} component={AuthenticationNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
