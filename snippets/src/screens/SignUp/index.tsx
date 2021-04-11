import React from 'react';
import {StatusBar, TextInput, View} from 'react-native';
import styled from 'styled-components/native';

interface InputProps {
  icon: string;
  placeHolder?: string;
  secureTextEntry?: boolean;
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const SignUpView = styled.View`
  height: 439px;
  margin: 136px 24px 0 24px;
`;

const Input = ({icon, placeHolder, secureTextEntry}: InputProps) => {
  return (
    <InputField>
      <View style={{flexDirection: 'row'}}>
        <Icon source={{uri: icon}} />
        <TextInput
          secureTextEntry={secureTextEntry ? true : false}
          placeholder={placeHolder}
          placeholderTextColor={'#bce0fd'}
          style={{
            marginLeft: 20,
            color: '#2699fb',
            fontSize: 14,
            lineHeight: 16
          }}
        />
      </View>
    </InputField>
  );
};

const InputField = styled.View`
  height: 48px;
  margin: 8px 24px;
  border-bottom-width: 1px;
  border-color: #bce0fd;
  justify-content: center;
  align-items: flex-start;
`;

const Icon = styled.Image`
  width: 16px;
  height: 16px;
`;

const Button = styled.TouchableOpacity`
  height: 48px;
  margin: 42px 24px 0 24px;
  border-radius: 4px;
  background-color: #2699fb;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`;

const SocialAppGroup = styled.View`
  margin: 56px 64px 0 64px;
  flex-direction: row;
  justify-content: space-between;
`;

const SocialAppIconView = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  border-width: 2px;
  border-color: #bce0fd;
  justify-content: center;
  align-items: center;
`;

const SocialAppIcon = ({icon}: InputProps) => {
  return (
    <SocialAppIconView>
      <Icon source={{uri: icon}} />
    </SocialAppIconView>
  );
};

const HaveAccountText = styled.Text`
  margin: 43px;
  font-size: 14px;
  line-height: 20px;
  color: #2699fb;
  text-align: center;
`;

const SignUp = () => {
  return (
    <Container>
      <StatusBar hidden />
      <SignUpView>
        <Input icon={'https://musicoding.com/content/images/apps/user_icon.png'} placeHolder={'Full Name'} />
        <Input icon={'https://musicoding.com/content/images/apps/mail_icon.png'} placeHolder={'Email'} />

        <Input icon={'https://musicoding.com/content/images/apps/lock_icon.png'} placeHolder={'Password'} secureTextEntry={true} />
        <Button>
          <ButtonText>CONTINUE</ButtonText>
        </Button>

        <SocialAppGroup>
          <SocialAppIcon icon={'https://musicoding.com/content/images/apps/facebook_icon.png'} />
          <SocialAppIcon icon={'https://musicoding.com/content/images/apps/twitter_icon.png'} />
          <SocialAppIcon icon={'https://musicoding.com/content/images/apps/google_icon.png'} />
        </SocialAppGroup>

        <HaveAccountText>Already have an account</HaveAccountText>
      </SignUpView>
    </Container>
  );
};

export default SignUp;
