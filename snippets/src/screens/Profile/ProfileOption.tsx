import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

const MENU = {uri: 'https://musicoding.com/content/images/apps/menu_icon.png', width: 16, height: 16};
const MORE = {uri: 'https://musicoding.com/content/images/apps/more_icon.png', width: 3, height: 16};
const LIKE = {uri: 'https://musicoding.com/content/images/apps/like_white_icon.png', width: 16, height: 16};
const COMMENTS = {uri: 'https://musicoding.com/content/images/apps/comments_white_icon.png', width: 16, height: 16};
const AVATAR = {uri: 'https://musicoding.com/content/images/apps/avatar.png', width: 40, height: 40};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const NavBarView = styled.View`
  height: 76px;
  margin: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

interface TextProps {
  color?: string;
  size?: number;
  height?: number;
  bold?: boolean;
}
const Text = styled.Text<TextProps>`
  color: ${(props) => (props.color ? props.color : '#2699fb')};
  font-size: ${(props) => (props.size ? props.size : 16)}px;
  line-height: ${(props) => (props.height ? props.height : 24)}px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

const ProfileView = styled.View`
  margin: 16px 25px;
  align-items: center;
`;

const StatsBox = styled.View`
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface StatsProps {
  count: string;
  item: string;
}
const Stats = ({count, item}: StatsProps) => {
  return (
    <View style={{marginHorizontal: 15, alignItems: 'center'}}>
      <Text size={20}>{count}</Text>
      <Text size={14}>{item}</Text>
    </View>
  );
};

const CardView = styled.View`
  width: 90%;
  height: 232px;
  background-color: #bce0fd;
  margin-top: 20px;
`;

const Footer = styled.View`
  position: absolute;
  bottom: 12px;
  margin: 0 24px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
const Card = () => {
  return (
    <CardView>
      <Footer>
        <Image source={LIKE} />
        <Text size={16} color={'#fff'} bold style={{marginHorizontal: 5}}>
          610
        </Text>
        <Image source={COMMENTS} />
        <Text size={16} color={'#fff'} bold style={{marginHorizontal: 5}}>
          120
        </Text>
        <Text size={16} color={'#fff'} bold style={{flex: 1, textAlign: 'right'}}>
          SHARE
        </Text>
      </Footer>
    </CardView>
  );
};

const NavBar = ({navigation}: DrawerContentComponentProps) => {
  return (
    <NavBarView>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image source={MENU} />
      </TouchableOpacity>
      <Text bold>PROFILE</Text>
      <Image source={MORE} />
    </NavBarView>
  );
};

const ProfileOption = ({navigation, ...rest}: DrawerContentComponentProps) => {
  return (
    <Container>
      <NavBar {...{navigation}} {...rest} />
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <Image source={AVATAR} />
        <Text size={20} bold style={{marginTop: 10}}>
          Winn
        </Text>
        <Text size={14}>San Francisco, CA</Text>
        <Text size={16} style={{marginTop: 20}}>
          My email is blah@blah.blah
        </Text>
        <StatsBox>
          <Stats count={'140'} item={'SHOTS'} />
          <View style={{width: 2, height: 24, backgroundColor: '#bce0fd'}} />
          <Stats count={'140'} item={'PROJECTS'} />
          <View style={{width: 2, height: 24, backgroundColor: '#bce0fd'}} />
          <Stats count={'26K'} item={'FOLLOWERS'} />
        </StatsBox>
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </Container>
  );
};

export default ProfileOption;
