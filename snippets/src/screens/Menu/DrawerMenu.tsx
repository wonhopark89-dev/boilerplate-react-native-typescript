/**
 * 1. Prepare
 * 2. Install dependencies components, e.g. @react-navigation
 * 3. Build a simple drawer menu with 2 inner testing screen
 * 4. Define images & menus constant
 * 5. Add custom drawer menu items
 * 6. Create Stack Navigator for each screens
 * 7. Link up the drawer menu with some UI examples which created in previous videos
 * 8. Style the drawer menu
 * */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import styled from 'styled-components/native';
import {ActivityFeed} from '../Feed';
import {MessagingOption} from '../Messaging';
import {ProfileOption} from '../Profile';
import {TouchableOpacity} from 'react-native';

interface MenuProps {
  name: string;
  label: string;
  icon: {uri: string};
}

const MENUS: MenuProps[] = [
  {
    name: 'Feed',
    label: 'FEED',
    icon: {uri: 'https://musicoding.com/content/images/apps/feed_white_icon.png'}
  },
  {
    name: 'Explore',
    label: 'EXPLORE',
    icon: {uri: 'https://musicoding.com/content/images/apps/explore_white_icon.png'}
  },
  {
    name: 'Messages',
    label: 'MESSAGE',
    icon: {uri: 'https://musicoding.com/content/images/apps/messages_white_icon.png'}
  },
  {
    name: 'Photos',
    label: 'PHOTOS',
    icon: {uri: 'https://musicoding.com/content/images/apps/photos_white_icon.png'}
  },
  {
    name: 'Videos',
    label: 'VIDEOS',
    icon: {uri: 'https://musicoding.com/content/images/apps/videos_white_icon.png'}
  },
  {
    name: 'Settings',
    label: 'SETTINGS',
    icon: {uri: 'https://musicoding.com/content/images/apps/settings_white_icon.png'}
  },
  {
    name: 'Profile',
    label: 'PROFILE',
    icon: {uri: 'https://musicoding.com/content/images/apps/avatar.png'}
  }
];

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const VideoScreen = () => {
  return (
    <Container>
      <Text size={24}>Videos Screen</Text>
    </Container>
  );
};

const SettingScreen = () => {
  return (
    <Container>
      <Text size={24}>Setting Screen</Text>
    </Container>
  );
};

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
  text-align: center;
`;

const SideBarContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #2699fb;
`;

const Header = styled.View`
  height: 100px;
  background-color: #bce0fd;
  flex-direction: row;
  padding: 32px;
  align-items: center;
`;

const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 32px;
  margin-bottom: 32px;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;

const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

const CustomDrawerContent = ({navigation}: DrawerContentComponentProps) => {
  const [activedIndex, setActivedIndex] = useState(0);
  return (
    <SideBarContainer>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Profile');
          navigation.closeDrawer();
        }}>
        <Header>
          <Avatar source={MENUS[1].icon} />
          <Text>Winn</Text>
        </Header>
      </TouchableOpacity>
      <DrawerContentScrollView>
        {/*<DrawerItemList {...props}/>*/}
        {MENUS.map((menu, index) => (
          <DrawerItem
            activeTintColor={'#fff'}
            focused={activedIndex === index}
            key={index}
            label={() => (
              <Text color={'#fff'} size={20}>
                {menu.label}
              </Text>
            )}
            onPress={() => {
              navigation.navigate(menu.name);
              navigation.closeDrawer();
              setActivedIndex(index);
            }}
            icon={() => <Icon source={menu.icon} />}
          />
        ))}
      </DrawerContentScrollView>
      <Footer>
        <Icon source={MENUS[1].icon} style={{marginRight: 16}} />
        <Icon source={MENUS[2].icon} style={{marginRight: 16}} />
        <Icon source={MENUS[3].icon} style={{marginRight: 16}} />
      </Footer>
    </SideBarContainer>
  );
};

type DrawerParams = {
  Videos: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Videos'}>
      <Stack.Screen name={'Videos'} component={VideoScreen} />
      <Stack.Screen name={'Settings'} component={SettingScreen} />
      <Stack.Screen name={'Feed'} component={ActivityFeed} options={{headerShown: false}} />
      <Stack.Screen name={'Messages'} component={MessagingOption} options={{headerShown: false}} />
      <Stack.Screen name={'Profile'} component={ProfileOption} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName={'Videos'} openByDefault hideStatusBar drawerContent={(props) => <CustomDrawerContent {...props} />}>
      {/*<Drawer.Screen name={'Videos'} component={VideoScreen} />*/}
      {/*<Drawer.Screen name={'Setting'} component={SettingScreen} />*/}
      <Drawer.Screen name={'Stacks'} component={StackNavigator} />
    </Drawer.Navigator>
  );
};

const DrawerMenu = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default DrawerMenu;
