import React, {ReactNode} from 'react';
import {View, Dimensions, StyleSheet, Image, StatusBar} from 'react-native';

const {width} = Dimensions.get('window');
const aspectRatio = 750 / 1125; // 이미지 비율
const height = width * aspectRatio; // 기기 가로 길이맞춰서 세로 비율 똑같이 설정

interface ContainerProps {
  children: ReactNode;
}

const assets = [require('./assets/patterns/1.png')];

const styles = StyleSheet.create({
  picture0: {
    //...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    width: width,
    height: height * 0.6,
    borderBottomLeftRadius: 75,
    overflow: 'hidden'
  }
});
// export type ImageResizeMode = 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
const Container = ({children}: ContainerProps) => {
  return (
    <View style={{flex: 1, backgroundColor: '#0C0D34'}}>
      <StatusBar barStyle={'light-content'} />
      <View style={{backgroundColor: 'white'}}>
        <Image style={styles.picture0} source={assets[0]} resizeMode={'cover'} />
      </View>
      <View style={{backgroundColor: 'white', height: '60%', borderBottomLeftRadius: 75, borderBottomRightRadius: 75}}></View>
      {children}
    </View>
  );
};

export default Container;
