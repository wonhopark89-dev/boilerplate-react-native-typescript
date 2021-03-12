import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Slide from '~/Fashion/Authentication/Onboarding/Slide';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  slider: {height: 0.6 * height, backgroundColor: 'cyan', borderBottomRightRadius: 75},
  footer: {flex: 1}
});

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ScrollView
          horizontal={true}
          snapToInterval={width}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          bounces={false}>
          <Slide label={'Relaxed'} />
          <Slide label={'Playful'} right />
          <Slide label={'Excentric'} />
          <Slide label={'Funky'} right />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={{...StyleSheet.absoluteFillObject, backgroundColor: 'cyan'}} />
        <View style={{flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75}} />
      </View>
    </View>
  );
};

export default Onboarding;
