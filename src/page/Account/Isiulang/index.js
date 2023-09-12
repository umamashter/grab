import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const TopUpBalanceScreen = () => {
  const [amount, setAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');

  const topUpBalance = () => {
    // Di sini Anda dapat mengambil jumlah saldo yang dimasukkan oleh pengguna
    // dan memeriksa metode pembayaran yang dipilih.

    // Misalnya:
    if (amount && selectedMethod) {
      // Lakukan validasi dan tindakan lainnya di sini.
      // Jika semuanya valid, Anda dapat melakukan pengisian ulang saldo dengan metode yang dipilih.
      alert(
        `Anda telah mengisi ulang saldo sebesar ${amount} dengan metode ${selectedMethod}`,
      );
    } else {
      alert('Mohon masukkan jumlah saldo dan pilih metode pembayaran');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Jumlah Saldo yang Ingin Diisi Ulang</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan jumlah saldo"
          keyboardType="numeric"
          value={amount}
          onChangeText={text => setAmount(text)}
        />
      </View>

      <Text style={styles.label}>Pilih Metode Pembayaran</Text>
      <View style={styles.paymentMethods}>
        <TouchableOpacity
          style={[
            styles.paymentMethod,
            selectedMethod === 'Indomaret' && styles.selectedPaymentMethod,
          ]}
          onPress={() => setSelectedMethod('Indomaret')}>
          <Text style={styles.paymentMethodText}>Indomaret</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.paymentMethod,
            selectedMethod === 'ATM' && styles.selectedPaymentMethod,
          ]}
          onPress={() => setSelectedMethod('ATM')}>
          <Text style={styles.paymentMethodText}>ATM</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.paymentMethod,
            selectedMethod === 'Mobile Banking' && styles.selectedPaymentMethod,
          ]}
          onPress={() => setSelectedMethod('Mobile Banking')}>
          <Text style={styles.paymentMethodText}>Mobile Banking</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.paragraph}>
        Pilih salah satu metode pembayaran yang sesuai dengan preferensi Anda.
        Anda dapat mengisi ulang saldo melalui Indomaret, ATM, atau Mobile
        Banking. Pastikan Anda memasukkan jumlah saldo dengan benar sebelum
        melanjutkan.
      </Text>

      <TouchableOpacity style={styles.topUpButton} onPress={topUpBalance}>
        <Text style={styles.topUpButtonLabel}>Isi Ulang Saldo</Text>
      </TouchableOpacity>
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
  paymentMethods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  paymentMethod: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  selectedPaymentMethod: {
    backgroundColor: '#4CAF50',
  },
  paymentMethodText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  topUpButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  topUpButtonLabel: {
    color: 'white',
    fontSize: 16,
  },
});

export default TopUpBalanceScreen;
