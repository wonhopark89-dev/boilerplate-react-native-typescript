import * as React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {RootStackParamList} from '~/RootStackNavigator';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const RootScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'pink', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('FashionRootScreen')}>
        <View style={{padding: 20}}>
          <Text>Fashion</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RootScreen;
