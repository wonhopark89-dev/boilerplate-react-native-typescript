import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Slide, {SLIDE_HEIGHT} from '~/Fashion/Authentication/Onboarding/Slide';
import Animated, {interpolateColor} from 'react-native-reanimated';
// import {onScrollEvent, useValue} from 'react-native-redash/lib/typescript/v1';

const BOARDER_RADIUS = 75;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  slider: {height: SLIDE_HEIGHT, borderBottomRightRadius: BOARDER_RADIUS},
  footer: {flex: 1},
  footerContent: {flex: 1, backgroundColor: 'white', borderTopLeftRadius: BOARDER_RADIUS}
});

const slides = [
  {label: 'Relaxed', color: '#BFEAF5'},
  {label: 'Playful', color: '#BEECC4'},
  {label: 'Excentric', color: '#FFE4D9'},
  {label: 'Funky', color: '#FFDDDD'}
];
const Onboarding = () => {
  // TODO : useScrollEvent ?
  // const onScroll = onScrollEvent({x});
  // const onScroll = onScrollEvent({x});

  // 4개 화면에 대한 배경색이 자연스럽게 바뀌도록, 값은 너비기준
  // const backgroundColor = interpolateColor(x, {
  //   inputRange: [0, width, width * 2, width * 3],
  //   outputRange: ['#BFEAF5', '#BEECC4', '#FFE4D9', '#FFDDDD']
  // });

  const backgroundColor = interpolateColor(
    0,
    slides.map((_, i) => i * width),
    slides.map((slide) => slide.color)
  );

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        <Animated.ScrollView
          horizontal={true}
          snapToInterval={width}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}>
          {slides.map(({label}, index) => (
            <Slide key={index} right={!!(index % 2)} {...{label}} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor}} />
        <View style={styles.footerContent} />
      </View>
    </View>
  );
};

export default Onboarding;
