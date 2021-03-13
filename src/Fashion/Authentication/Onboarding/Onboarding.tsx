import React, {useRef} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Slide, {SLIDE_HEIGHT} from '~/Fashion/Authentication/Onboarding/Slide';
import Animated, {divide, interpolateColor, useAnimatedScrollHandler, useSharedValue, multiply} from 'react-native-reanimated';
import Subslide from './Subslide';
import Dot from './Dot';

// TODO : redash 옵션 다시 구현하기 ( 모듈 못찾는 에러 )
const BOARDER_RADIUS = 75;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  slider: {height: SLIDE_HEIGHT, borderBottomRightRadius: BOARDER_RADIUS},
  footer: {flex: 1},
  footerContent: {flex: 1, flexDirection: 'row', backgroundColor: 'white', borderTopLeftRadius: BOARDER_RADIUS},
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BOARDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const slides = [
  {
    title: 'Relaxed',
    color: '#BFEAF5',
    subtitle: 'Find Your Outfits',
    description: 'Confused about your outfit? Don’t worry! Find the best outfit here!'
  },
  {
    title: 'Playful',
    color: '#BEECC4',
    subtitle: 'Hear it First, Wear it First',
    description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas'
  },
  {
    title: 'Excentric',
    color: '#FFE4D9',
    subtitle: 'Your Style, Your Way',
    description: ' Create your individual & unique style and look amazing everyday'
  },
  {
    title: 'Funky',
    color: '#FFDDDD',
    subtitle: 'Look Good, Feel Good',
    description: 'Discover the latest trends in fashion and explore your personality'
  }
];
const Onboarding = () => {
  // const x = useValue(0);
  // TODO : useScrollEvent ?
  // const onScroll = onScrollEvent({x});

  // 4개 화면에 대한 배경색이 자연스럽게 바뀌도록, 값은 너비기준
  // const backgroundColor = interpolateColor(x, {
  //   inputRange: [0, width, width * 2, width * 3],
  //   outputRange: ['#BFEAF5', '#BEECC4', '#FFE4D9', '#FFDDDD']
  // });
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset}) => {
      x.value = contentOffset.x;
    }
  });

  const backgroundColor = interpolateColor(
    0,
    slides.map((_, i) => i * width),
    slides.map((slide) => slide.color)
  );

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal={true}
          snapToInterval={width}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}
          onScroll={onScroll}>
          {slides.map(({title}, index) => (
            <Slide key={index} right={!!(index % 2)} {...{title}} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      {/*하단*/}
      <View style={styles.footer}>
        <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor}} />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x.value, width)} {...{index}} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: width * slides.length,
              transform: [{translateX: multiply(x.value, -1)}]
            }}>
            {slides.map(({subtitle, description}, index) => {
              const last = index === slides.length - 1;
              console.log(`index ${last}`);
              return (
                <Subslide
                  key={index}
                  onPress={() => {
                    console.log(`width : ${width}, index : ${index}`);
                    if (last) {
                      console.log('last~');
                    } else {
                      scroll.current?.getNode().scrollTo({x: width * (index + 1), animated: true});
                    }
                  }}
                  {...{subtitle, description, last}}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
