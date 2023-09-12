// TopUpScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

function TopUpScreen({navigation}) {
  const [selectedValue, setSelectedValue] = useState('option1');
  const [amount, setAmount] = useState('');

  const handleTopUp = () => {
    // Implementasikan logika pembayaran sesuai kebutuhan Anda di sini
    // Misalnya, Anda dapat mengirim permintaan ke gateway pembayaran
    // dan menangani respon dari gateway pembayaran di sini.
    // Ini hanya contoh dasar, bukan implementasi yang sebenarnya.
    if (amount > 0) {
      alert(`Top-up sebesar $${amount} berhasil!`);
      navigation.goBack();
    } else {
      alert('Jumlah top-up harus lebih dari 0.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Pilih opsi:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item
          style={{fontSize: 20, fontWeight: 'bold'}}
          label="Ovo"
          value="option1"
        />
        <Picker.Item
          style={{fontSize: 20, fontWeight: 'bold'}}
          label="Gopay"
          value="option2"
        />
        <Picker.Item
          style={{fontSize: 20, fontWeight: 'bold'}}
          label="Shoope Pay"
          value="option3"
        />
        <Picker.Item
          style={{fontSize: 20, fontWeight: 'bold'}}
          label="Dana"
          value="option4"
        />
        <Picker.Item
          style={{fontSize: 20, fontWeight: 'bold'}}
          label="Permata Bank"
          value="option5"
        />
        <Picker.Item
          style={{fontSize: 20, fontWeight: 'bold'}}
          label="Bca Bank"
          value="option6"
        />
      </Picker>
      <Text>Anda memilih: {selectedValue}</Text>
      <View style={{marginTop: 30}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Maskan jumlah saldo
        </Text>
        <TextInput
          placeholder="Jumlah top-up"
          keyboardType="numeric"
          value={amount}
          onChangeText={text => setAmount(text)}
        />
        <View style={{marginTop: 10}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={handleTopUp}>
              Beli Sekarang
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#81C784',
    flex: 1,
  },

  button: {
    backgroundColor: '#4CAF50',
    color: '#4CAF50',
    paddingVertical: 10, // Tinggi tombol
    paddingHorizontal: 150, // Lebar tombol
    borderRadius: 5, // Sudut bulat tombol
  },
  buttonText: {
    color: 'white', // Warna teks tombol
    fontSize: 18, // Ukuran teks tombol
  },
});

export default TopUpScreen;
