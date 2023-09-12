import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Button} from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';

export default class index extends Component {
  render() {
    return (
      <View style={{flex: 1, marginTop: 20}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#00E676',
            height: 60,
            width: 413,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Aktivitas</Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100,
          }}>
          <Ion name="reader-outline" size={100} />
          <Text style={{fontWeight: 'bold', fontSize: 15}}>
            Lagi Nggak ada apa-apa, nih
          </Text>
          <Text>Disini kamu bisa lihat layanan yang kamu pakai</Text>
        </View>
      </View>
    );
  }
}
