import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import FiturUtamaSub from './FiturUtamaSub';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  wrapperFiturUtama: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    flexWrap: 'wrap',
    width: '100%',
  },
});
const FiturUtama = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapperFiturUtama}>
      <FiturUtamaSub
        onPress={() => navigation.navigate('Food')}
        image={require('../icon/food.jpg')}
        title="Food"
      />
      <FiturUtamaSub
        onPress={() => navigation.navigate('Bike')}
        image={require('../icon/bike.jpg')}
        title="Bike"
      />
      <FiturUtamaSub
        onPress={() => navigation.navigate('Car')}
        image={require('../icon/car.jpg')}
        title="Car"
      />
      <FiturUtamaSub
        onPress={() => navigation.navigate('Deliver')}
        image={require('../icon/send.jpg')}
        title="Deliver"
      />
      <FiturUtamaSub
        onPress={() => navigation.navigate('Subscribe')}
        image={require('../icon/subscribe.jpg')}
        title="Subscribe"
      />
      <FiturUtamaSub
        onPress={() => navigation.navigate('Doctor')}
        image={require('../icon/doctor.jpg')}
        title="Doctor"
      />
      <FiturUtamaSub
        onPress={() => navigation.navigate('Pulsa')}
        image={require('../icon/pulsa.jpg')}
        title="Pulsa/Token"
      />
      <FiturUtamaSub
        onPress={() => navigation.navigate('More')}
        image={require('../icon/more.jpg')}
        title="More"
      />
    </View>
  );
};
export default FiturUtama;
