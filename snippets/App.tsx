import React from 'react';
import {View} from 'react-native';

import SignUp from './src/screens/SignUp';
import {ActivityFeed} from './src/screens/Feed';
import {ProfileOption} from './src/screens/Profile';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ProfileOption />
    </View>
  );
};

export default App;
