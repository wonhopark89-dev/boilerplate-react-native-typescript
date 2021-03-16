import React, {useRef} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Slide, {SLIDE_HEIGHT} from '~/Fashion/Authentication/Onboarding/Slide';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue
} from 'react-native-reanimated';
import Subslide from './Subslide';

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
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end'
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: BOARDER_RADIUS,
    overflow: 'hidden'
  }
});

const slides = [
  {
    title: 'Relaxed',
    color: '#BFEAF5',
    subtitle: 'Find Your Outfits',
    description: 'Confused about your outfit? Don’t worry! Find the best outfit here!',
    picture: {
      src: require('../assets/1.png')
    }
  },
  {
    title: 'Playful',
    color: '#BEECC4',
    subtitle: 'Hear it First, Wear it First',
    description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    picture: {
      src: require('../assets/2.png')
    }
  },
  {
    title: 'Excentric',
    color: '#FFE4D9',
    subtitle: 'Your Style, Your Way',
    description: ' Create your individual & unique style and look amazing everyday',
    picture: {
      src: require('../assets/3.png')
    }
  },
  {
    title: 'Funky',
    color: '#FFDDDD',
    subtitle: 'Look Good, Feel Good',
    description: 'Discover the latest trends in fashion and explore your personality',
    picture: {
      src: require('../assets/4.png')
    }
  }
];
const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset}) => {
      x.value = contentOffset.x;
    }
  });

  const backgroundColor = useDerivedValue(() =>
    interpolateColor(
      x.value,
      slides.map((_, i) => i * width),
      slides.map((slide) => slide.color)
    )
  );

  const slider = useAnimatedStyle(() => ({backgroundColor: backgroundColor.value}));
  const footerStyle = useAnimatedStyle(() => ({transform: [{translateX: -x.value}]}));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, slider]}>
        {slides.map(({picture}, index) => {
          const opacity = useAnimatedStyle(() => ({
            opacity: interpolate(x.value, [(index - 0.7) * width, index * width, (index + 0.7) * width], [0, 1, 0], Extrapolate.CLAMP)
          }));
          return (
            <Animated.View key={index} style={[styles.underlay, opacity]}>
              <Image source={picture.src} style={styles.picture} />
            </Animated.View>
          );
        })}
        <Animated.ScrollView
          ref={scroll}
          horizontal={true}
          snapToInterval={width}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}
          onScroll={onScroll}>
          {slides.map(({title, picture}, index) => (
            <Slide key={index} right={!!(index % 2)} {...{title, picture}} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      {/*하단*/}
      <Animated.View style={[styles.footer]}>
        <View style={styles.footerContent}>
          <Animated.View style={[{flex: 1, flexDirection: 'row', width: width * slides.length}, footerStyle]}>
            {slides.map(({subtitle, description}, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslide
                  key={index}
                  onPress={() => {
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
      </Animated.View>
    </View>
  );
};

export default Onboarding;
