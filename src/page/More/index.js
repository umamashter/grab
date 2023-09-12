import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const openHelpCenter = () => {
    // Implementasikan logika untuk membuka pusat bantuan (help center) di sini.
    // Ini mungkin melibatkan navigasi ke halaman bantuan atau membuka browser web ke halaman bantuan online.
    console.log('Buka Pusat Bantuan');
  };

  const contactSupport = () => {
    // Implementasikan logika untuk menghubungi dukungan pelanggan (support) di sini.
    // Ini bisa berarti membuka halaman kontak atau menampilkan nomor telepon untuk dukungan pelanggan.
    console.log('Hubungi Dukungan Pelanggan');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bantuan & Dukungan</Text>
      <TouchableOpacity style={styles.menuItem} onPress={openHelpCenter}>
        <Text style={styles.menuText}>Pusat Bantuan</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={contactSupport}>
        <Text style={styles.menuText}>Hubungi Dukungan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
