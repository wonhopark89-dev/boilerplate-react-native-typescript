import React, {useRef, useState} from 'react';
import {FlatList, Image, KeyboardAvoidingView, TextInput, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

const BACKWARD_ARROW = {uri: 'https://musicoding.com/content/images/apps/backward_arrow_icon.png', width: 16, height: 16};
const FORWARD_ARROW = {uri: 'https://musicoding.com/content/images/apps/forward_arrow_icon.png', width: 16, height: 16};
const SENDER = {uri: 'https://musicoding.com/content/images/apps/avatar.png', width: 40, height: 40};
const RECEIVER = {uri: 'https://musicoding.com/content/images/apps/avatar2.png', width: 40, height: 40};

type AvatarType = typeof SENDER;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f1f9ff;
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

const NavBar = ({navigation}: DrawerContentComponentProps) => {
  return (
    <NavBarView>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image source={BACKWARD_ARROW} />
      </TouchableOpacity>

      <Text bold>Winn</Text>
      <Text />
    </NavBarView>
  );
};

const MessageItemView = styled.View`
  margin-bottom: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
`;

const TriangleRight = styled.View`
  border-style: solid;
  border-width: 10px;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-left-color: #2699fb;
  border-right-color: transparent;
`;

const TriangleLeft = styled.View`
  border-style: solid;
  border-width: 10px;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: #fff;
`;

const InputView = styled.View`
  width: 100%;
  height: 56px;
  background-color: #fff;
  align-self: flex-end;
`;

const InputField = styled.View`
  margin: 20px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

interface MessagingProps {
  id: number;
  sent: boolean;
  msg: string;
  avatar: AvatarType;
}

const MessagingOption = ({navigation, ...rest}: DrawerContentComponentProps) => {
  const flatListRef = useRef<FlatList>(null);
  const [msg, setMsg] = useState('');
  const [msgList, setMsgList] = useState<MessagingProps[]>([
    {
      id: 1,
      sent: true,
      msg: 'Hello Halo hi, good morning, Hello Halo hi, good morning,Hello Halo hi, good morning',
      avatar: SENDER
    },
    {
      id: 2,
      sent: false,
      msg: 'Hello Halo hi2222222, good morning, Hello Halo hi2222222, good morning, Hello Halo hi2222222, good morning',
      avatar: RECEIVER
    }
  ]);

  const RenderItem = ({sent, msg, avatar}: MessagingProps) => {
    return (
      <>
        {sent ? (
          <MessageItemView style={{alignItems: 'center', marginHorizontal: 20}}>
            <View
              style={{flex: 1, backgroundColor: '#2699fb', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row'}}>
              <View style={{padding: 14}}>
                <Text size={16} color={'#fff'}>
                  {msg}
                </Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
              <TriangleRight />
              <Image source={SENDER} />
            </View>
          </MessageItemView>
        ) : (
          <MessageItemView style={{alignItems: 'center', marginHorizontal: 20}}>
            <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
              <Image source={RECEIVER} />
              <TriangleLeft />
            </View>
            <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row'}}>
              <View style={{padding: 14}}>
                <Text size={16} color={'#2699fb'}>
                  {msg}
                </Text>
              </View>
            </View>
          </MessageItemView>
        )}
      </>
    );
  };

  const onClickSend = () => {
    if (msg.length > 0) {
      setMsgList((prev) =>
        prev.concat({
          id: Math.floor(Math.random() * 9999 + 1),
          sent: true,
          msg,
          avatar: SENDER
        })
      );
    }
    setTimeout(() => {
      autoReply();
    }, 2000);
  };

  const autoReply = () => {
    if (msg.length > 0) {
      setMsg('');
      setMsgList((prev) =>
        prev.concat({
          id: Math.floor(Math.random() * 9999 + 1),
          sent: false,
          msg,
          avatar: RECEIVER
        })
      );
    }
  };

  return (
    <Container>
      <NavBar navigation={navigation} {...rest} />
      <KeyboardAvoidingView behavior={'padding'} style={{flex: 1}}>
        <FlatList
          data={msgList}
          renderItem={({item}) => <RenderItem {...item} />}
          keyExtractor={(_, index) => `${index}`}
          extraData={msgList}
          ref={flatListRef}
          onContentSizeChange={() => flatListRef?.current?.scrollToEnd()}
        />
        <InputView>
          <InputField>
            <TextInput
              style={{flex: 1, color: '#2699fb', fontSize: 14, lineHeight: 16, marginRight: 10}}
              placeholder={'Say something...'}
              placeholderTextColor={'#bce0fd'}
              autoCapitalize={'none'}
              returnKeyType={'send'}
              value={msg}
              onChangeText={(input) => setMsg(input)}
              onSubmitEditing={() => onClickSend()}
            />
            <TouchableOpacity onPress={() => onClickSend()}>
              <Image source={FORWARD_ARROW} />
            </TouchableOpacity>
          </InputField>
        </InputView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default MessagingOption;
