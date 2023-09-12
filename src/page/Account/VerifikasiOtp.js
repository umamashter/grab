import React, {useState} from 'react';
import {Text, View, StatusBar, TextInput} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation, validatePathConfig} from '@react-navigation/native';

const Login = props => {
  const navigation = useNavigation();
  const [displaySosmed, setDisplaySosmed] = useState('flex');
  const [verifikasiOtp, setVerifikasiOtp] = useState(
    props.route.params.kodeOtp,
  );
  const [nohp, setNohp] = useState(props.route.params.nohp);
  const [actionBotton, setActionBotton] = useState(
    'or continue with a sosial media',
  );
  const [kodeOtp, setKodeOtp] = useState('');
  const [warningEror, setWarningEroro] = useState('');
  const proses = kodeOtp => {
    if (kodeOtp.length > 5) {
      if (kodeOtp != verifikasiOtp) {
        setWarningEroro('invalid code');
      } else {
        navigation.navigate('Home');
      }
    } else {
      setWarningEroro('');
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#09AB54" />
      <View style={{marginHorizontal: 18, flex: 1}}>
        <Text
          style={{
            fontSize: 50,
            color: '#09AB54',
            marginTop: 20,
            fontWeight: 'bold',
          }}>
          Verifikasi
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: '#09AB54',
            marginTop: 80,
            fontWeight: 'bold',
          }}>
          Masukkan 6 digit kode yang telah dikirimkan
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: '#09AB54',
            marginTop: 5,
          }}>
          {nohp}
        </Text>
        <View
          style={{
            width: 300,
            height: 53,
            backgroundColor: '#09AB54',
            borderRadius: 10,
            marginTop: 10,
          }}>
          <TextInput
            style={{fontSize: 25, color: 'white'}}
            placeholder="Masukan kode"
            onChangeText={kodeOtp => {
              setKodeOtp(kodeOtp);
              if (nohp.length > 5) {
                proses(kodeOtp);
              }
            }}
            keyboardType="number-pad"
            value={kodeOtp}
          />
        </View>
        <View>
          <Text
            style={{
              color: '#c7264b',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 15,
              fontSize: 17,
            }}>
            {warningEror}
          </Text>
        </View>
      </View>

      {/* <View
        style={{
          display: displaySosmed,
          height: 90,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableRipple
          style={{
            backgroundColor: '#2166b0',
            width: 110,
            height: 50,
            justifyContent: 'center',
            elevation: 4,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Facebook</Text>
        </TouchableRipple>
        <TouchableRipple
          style={{
            backgroundColor: 'red',
            width: 110,
            height: 50,
            justifyContent: 'center',
            elevation: 4,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Google</Text>
        </TouchableRipple>
      </View> */}
    </View>
  );
};

export default Login;
