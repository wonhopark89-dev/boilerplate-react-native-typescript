import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Container from '~/Fashion/Authentication/components/Container';
import SocialLogin from '~/Fashion/Authentication/components/SocialLogin';

const styles = StyleSheet.create({
  description: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 5,
    marginBottom: 10
  }
});
const Login = () => {
  const footer = () => (
    <>
      <SocialLogin />
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.description}>Don`t have an account?</Text>
        <Text style={[styles.description, {color: 'pink'}]}>Sign Up here</Text>
      </View>
    </>
  );

  return <Container children={footer()}></Container>;
};

export default Login;
