import React from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';

const {width, height} = Dimensions.get('window');
const BOARDER_RADIUS = 75;
export const SLIDE_HEIGHT = 0.6 * height;
const styles = StyleSheet.create({
  container: {width},
  titleContainer: {
    height: 100,
    justifyContent: 'center',
    transform: [{translateY: (SLIDE_HEIGHT - 100) / 2}]
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end'
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: BOARDER_RADIUS
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: 'SFProText-Bold',
    color: 'white',
    textAlign: 'center'
  }
});
interface SlideProps {
  title: string;
  right?: boolean;
  picture: number;
}

const Slide = ({title, right, picture}: SlideProps) => {
  const transform = [
    {translateY: (SLIDE_HEIGHT - 100) / 2},
    {translateX: right ? width / 2 - 50 : -width / 2 + 50},
    {rotate: right ? '-90deg' : '90deg'}
  ];
  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image source={picture} style={styles.picture} />
      </View>
      <View style={[styles.titleContainer, {transform}]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
