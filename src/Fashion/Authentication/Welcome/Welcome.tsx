import React from 'react';
import {View, Image, Dimensions, StyleSheet, Text} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';

import {Button} from '../components';
import {Routes, StackNavigationProps} from '~/Fashion/Authentication/AuthenticationNavigator';

const {width} = Dimensions.get('window');
const picture = {
  src: require('../assets/5.png')
};

const styles = StyleSheet.create({
  container: {
    width,
    padding: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#f6f6f6',
    width: undefined,
    height: undefined,
    borderBottomRightRadius: 75,
    overflow: 'hidden'
  },
  subtitle: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    color: '#0C0D34',
    textAlign: 'center'
  },
  description: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: 10
  }
});

export const assets = [picture.src];
const Welcome = ({navigation}: StackNavigationProps<Routes, 'Welcome'>) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <Image style={styles.picture} source={picture.src} />
      </View>

      <View style={styles.container}>
        <Text style={styles.subtitle}>Let’s get started</Text>
        <Text style={styles.description}>Login to your account below or signup for an amazing experience</Text>
        <View style={{paddingVertical: 10}}>
          <Button onPress={() => navigation.navigate('Login')} variant="primary" label="Have an account? Login" />
        </View>
        <View style={{paddingVertical: 10}}>
          <Button label="Join us, it’s Free" onPress={() => true} />
        </View>
        <View style={{paddingVertical: 10}}>
          <BorderlessButton>
            <Text>Forgot password?</Text>
          </BorderlessButton>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
