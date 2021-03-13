import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 44,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subtitle: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    color: '#0C0D34',
    textAlign: 'center'
  },
  description: {
    fontFamily: 'SFProText-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#0C0D34',
    textAlign: 'center',
    marginBottom: 40
  }
});

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  // x: Animated.Node<number>;
  onPress: () => void;
}

const Subslide = ({subtitle, description, last, onPress}: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button label={last ? 'Let`s get started' : 'Next'} variant={last ? 'primary' : 'default'} {...{onPress}}></Button>
    </View>
  );
};

export default Subslide;
