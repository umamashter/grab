import React, {Component} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Account = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, marginTop: 21}}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="#69F0AE"
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#00E676',
          height: 60,
          width: 413,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Pembayaran</Text>
      </TouchableOpacity>
      <View>
        <View
          style={{
            marginHorizontal: 18,
            height: 200,
            backgroundColor: 'white',
            marginTop: 20,
            elevation: 4,
            borderRadius: 10,
          }}>
          <Ion
            style={{marginLeft: 20, marginTop: 15}}
            name="cash-outline"
            size={60}
            color="#575757"
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              marginLeft: 16,
              marginTop: 20,
              textShadowColor: 'black',
            }}>
            Nikmati pembayaran nontunai, aktifkan OVO Cash-mu
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#4CAF50',
              marginTop: 20,
              marginLeft: 20,
            }}>
            Aktifkan Sekarang
          </Text>
        </View>
      </View>
      <View
        style={{
          marginStart: -25,
          marginHorizontal: 18,
          height: 160,
          width: 450,
          backgroundColor: 'white',
          marginTop: 20,
          elevation: 4,
          borderRadius: 10,
        }}>
        <TouchableOpacity
          style={{
            marginHorizontal: 18,
            height: 60,
            width: 360,
            backgroundColor: '#4CAF50',
            marginTop: 15,
            elevation: 4,
            marginLeft: 50,
            borderRadius: 10,
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('Kartu')}>
          <Ion
            style={{marginTop: 10, marginLeft: 10, color: 'white'}}
            name="wallet-outline"
            size={40}
          />
          <Text
            style={{
              marginTop: 15,
              color: 'white',
              marginLeft: 10,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Tambahkan Kartu
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              marginHorizontal: 18,
              height: 50,
              width: 115,
              backgroundColor: '#4CAF50',
              marginTop: 15,
              elevation: 4,
              marginLeft: 60,
              borderRadius: 10,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row', justifyContent: 'space-between'}}
              onPress={() => navigation.navigate('Isiulang')}>
              <Ion
                style={{marginTop: 10, marginLeft: 10, color: 'white'}}
                name="card-outline"
                size={30}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  marginTop: 15,
                  fontSize: 15,
                  marginLeft: 5,
                  color: 'white',
                }}>
                Isi ulang
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginHorizontal: 18,
              height: 50,
              width: 200,
              backgroundColor: '#4CAF50',
              marginTop: 15,
              elevation: 4,
              marginLeft: 5,
              borderRadius: 10,
              flexDirection: 'row',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Ion
                style={{marginTop: 10, marginLeft: 10, color: 'white'}}
                name="scan-outline"
                size={30}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  marginTop: 15,
                  fontSize: 15,
                  color: 'white',
                  marginLeft: 5,
                }}>
                scan untuk membayar
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Account;
