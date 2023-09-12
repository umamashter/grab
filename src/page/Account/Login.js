import React, {useState, useEffect} from 'react';
import {Text, View, StatusBar, TextInput} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Login = ({navigation}) => {
  const [displaySosmed, setDisplaySosmed] = useState('flex');
  const [nohp, setNohp] = useState('');
  const [actionBotton, setActionBotton] = useState(
    'or continue with a sosial media',
  );
  useEffect(() => {
    const _validasiSession = async () => {
      const isLogin = await AsyncStorage.getItem('session_id');
      if (isLogin) {
        navigation.navigate('Home');
      }
    };
    _validasiSession();
  }, []);
  const proses = () => {
    if (
      nohp.length > 9 &&
      nohp.length < 13 &&
      nohp.substring(0, 1) == '8' &&
      !isNaN(nohp)
    ) {
      navigation.navigate('VerifikasiOtp', {nohp, kodeOtp: 123456});
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#09AB54'}}>
      <StatusBar backgroundColor="#09AB54" />
      <View style={{marginHorizontal: 18, flex: 1}}>
        <Text
          style={{
            fontSize: 50,
            color: 'white',
            marginTop: 20,
            fontWeight: 'bold',
          }}>
          Grab
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            marginTop: 80,
            fontWeight: 'bold',
          }}>
          Selamat datang
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: 'white',
            marginTop: 5,
          }}>
          Masukkan nomor ponsel untuk melanjutkan
        </Text>
        <View
          style={{
            width: 250,
            height: 43,
            backgroundColor: 'white',
            borderRadius: 10,
            marginTop: 10,
          }}>
          <TextInput
            style={{fontSize: 20, marginTop: -10}}
            placeholder="+62 Input number "
            onChangeText={nohp => {
              setNohp(nohp);
              if (
                nohp.length > 9 &&
                nohp.length < 13 &&
                nohp.substring(0, 1) == '8' &&
                !isNaN(nohp)
              ) {
                setActionBotton('Continue');
              } else {
                setActionBotton('or continue with a sosial media');
              }
            }}
            keyboardType="number-pad"
            onFocus={() => setDisplaySosmed('none')}
            onBlur={() => setDisplaySosmed('flex')}
            value={nohp}
          />
        </View>
      </View>
      <TouchableRipple
        style={{alignItems: 'center', marginBottom: 15}}
        onPress={() => proses()}>
        <Text style={{fontSize: 15, color: 'white'}}>{actionBotton}</Text>
      </TouchableRipple>
      <View
        style={{
          display: displaySosmed,
          height: 60,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableRipple
          style={{
            backgroundColor: '#2166b0',
            width: 80,
            height: 40,
            justifyContent: 'center',
            borderRadius: 50,
            elevation: 4,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Facebook</Text>
        </TouchableRipple>
        <TouchableRipple
          style={{
            backgroundColor: 'red',
            width: 80,
            height: 40,
            borderRadius: 50,
            justifyContent: 'center',
            elevation: 4,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Google</Text>
        </TouchableRipple>
      </View>
    </View>
  );
};

export default Login;
