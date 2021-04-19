import React, {useState} from 'react';
import {FlatList, StatusBar, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

interface FeedProps {
  id: number;
  userName: string;
  avatar: string;
  content: string;
  timeAge: string;
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f1f9ff;
`;

const NavBar = styled.View`
  height: 76px;
  margin: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.Image`
  width: 16px;
  height: 16px;
`;

const Title = styled.Text`
  color: #2699fb;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
`;

const Card = styled.View`
  margin: 8px;
  background-color: #fff;
`;
const CardContent = styled.View`
  margin: 30px;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Content = styled.View`
  margin: 16px 0;
`;
const ContentText = styled.Text`
  color: #2699fb;
  font-size: 16px;
  line-height: 24px;
`;

const Footer = styled.View`
  margin-top: 32px;
  flex-direction: row;
  justify-content: space-between;
`;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;
const UserName = styled.Text`
  color: #2699fb;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  margin-left: 8px;
`;

const Time = styled.Text`
  color: #2699fb;
  font-size: 16px;
  line-height: 24px;
`;

const Image = styled.View`
  height: 170px;
  background-color: #bce0fd;
`;

const Number = styled.Text`
  color: #2699fb;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  margin-left: 8px;
  margin-right: 8px;
`;

const Share = styled.Text`
  color: #2699fb;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
`;

const ActivityFeed = ({navigation}: DrawerContentComponentProps) => {
  const [data, setData] = useState<FeedProps[]>(
    new Array(5).fill({
      userName: 'Name Surname',
      avatar: 'https://musicoding.com/content/images/apps/avatar.png',
      content: 'ABCDE abcde ZXCVB zxcvb ASDFG asdfg ABCDE abcde ZXCVB zxcvb ASDFG asdfg ABCDE abcde ZXCVB zxcvb ASDFG asdfg ',
      timeAge: '1h age'
    })
  );

  // const [data, setData] = useState<FeedProps[]>([
  //   {
  //     id: 1,
  //     userName: 'Name Surname',
  //     avatar: 'https://musicoding.com/content/images/apps/avatar.png',
  //     content: 'sfsdfsdfsfsdfdsfssdfsf',
  //     timeAge: '1h age'
  //   }
  // ]);

  const RenderItem = ({content, avatar, timeAge, userName}: FeedProps) => {
    return (
      <Card>
        <CardContent>
          <Header>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Avatar source={{uri: avatar}} />
              <UserName>{userName}</UserName>
            </View>
            <Time>{timeAge}</Time>
          </Header>
          <Content>
            <ContentText>{content}</ContentText>
          </Content>
          <Image />
          <Footer>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon source={{uri: 'https://musicoding.com/content/images/apps/like_icon.png'}} />
              <Number>500</Number>
              <Icon source={{uri: 'https://musicoding.com/content/images/apps/comments_icon.png'}} />
              <Number>100</Number>
            </View>
            <Share>{`SHARE`}</Share>
          </Footer>
        </CardContent>
      </Card>
    );
  };

  return (
    <Container>
      <StatusBar hidden />
      <NavBar>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon source={{uri: 'https://musicoding.com/content/images/apps/menu_icon.png'}} />
        </TouchableOpacity>
        <Title>{`ACTIVITY FEED`}</Title>
        <Icon source={{uri: 'https://musicoding.com/content/images/apps/search_icon.png'}} />
      </NavBar>
      <FlatList keyExtractor={(_, index) => `${index}`} data={data} renderItem={({item}) => <RenderItem {...item} />} />
    </Container>
  );
};

export default ActivityFeed;
