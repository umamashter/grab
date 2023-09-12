import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const AddBankCardScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const addBankCard = () => {
    // Di sini Anda dapat mengambil informasi kartu bank yang dimasukkan oleh pengguna
    // dan melakukan tindakan seperti validasi atau pengiriman ke server.

    // Misalnya:
    if (cardNumber && expiryDate && cvv) {
      // Lakukan validasi dan tindakan lainnya di sini.
      // Jika semuanya valid, Anda dapat menyimpan kartu bank atau mengirimnya ke server.
      alert('Kartu bank berhasil ditambahkan');
    } else {
      alert('Mohon isi semua informasi kartu bank');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Nomor Kartu</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan nomor kartu"
          value={cardNumber}
          onChangeText={text => setCardNumber(text)}
        />

        <Text style={styles.label}>Tanggal Kadaluarsa (MM/YY)</Text>
        <TextInput
          style={styles.input}
          placeholder="MM/YY"
          value={expiryDate}
          onChangeText={text => setExpiryDate(text)}
        />

        <Text style={styles.label}>CVV</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan CVV"
          value={cvv}
          onChangeText={text => setCVV(text)}
        />
      </View>

      <TouchableOpacity style={styles.addButton} onPress={addBankCard}>
        <Text style={styles.addButtonLabel}>Tambahkan Kartu Bank</Text>
      </TouchableOpacity>

      <View style={styles.paragraph}>
        <Text style={styles.paragraphText}>
          Pastikan Anda memasukkan informasi kartu bank dengan benar. Data kartu
          bank yang Anda masukkan akan dijaga kerahasiaannya dan digunakan hanya
          untuk tujuan pembayaran.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 16,
  },
  paragraph: {
    marginTop: 20,
  },
  paragraphText: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
});

export default AddBankCardScreen;
