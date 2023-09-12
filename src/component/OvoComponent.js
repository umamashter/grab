import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
const styles = StyleSheet.create({
  wrapperPay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ovoFeatureImage: {
    height: 45,
    width: 45,
    marginTop: 17,
    marginHorizontal: 40,
  },
});
const OvoComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapperPay}>
      <TouchableOpacity onPress={() => navigation.navigate('Pay')}>
        <Image
          style={styles.ovoFeatureImage}
          source={require('../icon/pay.jpg')}
        />
        <Text style={{alignSelf: 'center', marginTop: 5}}>Pay</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Isi')}>
        <Image
          style={styles.ovoFeatureImage}
          source={require('../icon/topup.jpg')}
        />
        <Text style={{alignSelf: 'center', marginTop: 5}}>Top Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Reward')}>
        <Image
          style={styles.ovoFeatureImage}
          source={require('../icon/reward.jpg')}
        />
        <Text style={{alignSelf: 'center', marginTop: 5}}>Reward</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OvoComponent;
