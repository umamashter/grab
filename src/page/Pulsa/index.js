import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const App = () => {
  const [nominal, setNominal] = useState('');

  const beliPulsaToken = () => {
    // Di sini Anda dapat memanggil API pembelian pulsa/token
    // Menggunakan layanan pihak ketiga yang sesuai.
    // Sebagai contoh, kita hanya menampilkan pemberitahuan.

    Alert.alert(
      'Pembelian Berhasil',
      `Anda telah membeli pulsa/token sebesar Rp${nominal}`,
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://assets.grab.com/wp-content/uploads/sites/9/2020/02/11101745/selasa-diskon-pulsa-landing-page.jpg',
        }} // Ganti dengan path gambar Anda
        style={styles.image}
      />
      <Text style={styles.label}>Masukkan Nominal Pulsa/Token:</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: 10000"
        keyboardType="numeric"
        value={nominal}
        onChangeText={text => setNominal(text)}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={beliPulsaToken}>
          Beli Sekarang
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#4CAF50',
  },
  input: {
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    color: '#4CAF50',
    paddingVertical: 10, // Tinggi tombol
    paddingHorizontal: 20, // Lebar tombol
    borderRadius: 5, // Sudut bulat tombol
  },
  buttonText: {
    color: 'white', // Warna teks tombol
    fontSize: 18, // Ukuran teks tombol
  },
  image: {
    width: 380, // Lebar gambar
    height: 180, // Tinggi gambar
    borderRadius: 10, // Sudut bulat gambar (jika diperlukan)
    resizeMode: 'cover', // Mode tampilan gambar (cover, contain, etc.)
    marginTop: -30,
  },
});

export default App;
