import React from 'react';
import {View} from 'react-native';

import SignUp from './src/screens/SignUp';
import {ActivityFeed} from './src/screens/Feed';
import {ProfileOption} from './src/screens/Profile';
import {MessagingOption} from './src/screens/Messaging';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <MessagingOption />
    </View>
  );
};

export default App;
