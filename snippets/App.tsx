import React from 'react';
import {View} from 'react-native';

import SignUp from './src/screens/SignUp';
import {ActivityFeed} from './src/screens/Feed';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ActivityFeed />
    </View>
  );
};

export default App;
