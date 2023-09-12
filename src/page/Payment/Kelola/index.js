import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
  Switch,
} from 'react-native';

const ProfileScreen = () => {
  const manageDevices = () => {
    // Di sini Anda dapat menambahkan logika untuk mengelola perangkat, seperti
    // menampilkan daftar perangkat yang terhubung dan memungkinkan pengguna
    // untuk menghapus atau menambahkan perangkat.
    // Misalnya, Anda dapat menavigasikan pengguna ke layar khusus "Kelola Perangkat"
    // atau menampilkan dialog konfirmasi sebelum menghapus perangkat.
    // Implementasi logika manajemen perangkat sesuai dengan kebutuhan Anda.
    // Contoh:
    // navigation.navigate('ManageDevices'); // Navigasi ke layar kelola perangkat
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Bagian Pengaturan Profil */}
      <View style={styles.settings}>
        <TouchableOpacity style={styles.settingItem} onPress={manageDevices}>
          <Text style={styles.settingText}>Kelola Perangkat</Text>
        </TouchableOpacity>
        {/* ... Kode lainnya seperti sebelumnya ... */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // ... styles yang sebelumnya ...

  changePassword: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  changeEmail: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
});

export default ProfileScreen;
