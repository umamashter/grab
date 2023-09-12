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
} from 'react-native';

const ProfileScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const changePassword = () => {
    // Di sini Anda dapat menambahkan logika untuk mengubah kata sandi.
    // Anda perlu memeriksa apakah kata sandi saat ini benar, apakah kata sandi baru sesuai, dll.

    if (
      currentPassword === 'katasandilama' &&
      newPassword === confirmNewPassword
    ) {
      // Simpan kata sandi baru ke server atau penyimpanan lokal sesuai kebutuhan Anda.
      // Misalnya: saveNewPasswordToServer(newPassword);

      Alert.alert('Berhasil', 'Kata sandi berhasil diubah.');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } else {
      Alert.alert(
        'Kesalahan',
        'Kata sandi saat ini salah atau kata sandi baru tidak cocok.',
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        {/* ... Kode lainnya seperti sebelumnya ... */}
      </View>

      <View style={styles.actions}>
        {/* ... Kode lainnya seperti sebelumnya ... */}
      </View>

      {/* Bagian Pengaturan Profil */}
      <View style={styles.settings}>
        <Text style={styles.sectionHeader}>Pengaturan Profil</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Text
            style={styles.settingText}
            onPress={() => navigation.navigate('ChangePassword')}>
            Ubah Kata Sandi
          </Text>
        </TouchableOpacity>
        {/* ... Kode lainnya seperti sebelumnya ... */}
      </View>

      {/* Bagian OVO Points */}
      <View style={styles.ovoPoints}>
        {/* ... Kode lainnya seperti sebelumnya ... */}
      </View>

      {/* Bagian Keamanan */}
      <View style={styles.security}>
        {/* ... Kode lainnya seperti sebelumnya ... */}
      </View>

      {/* Bagian Ubah Kata Sandi */}
      <View style={styles.changePassword}>
        <Text style={styles.sectionHeader}>Ubah Kata Sandi</Text>
        <TextInput
          style={styles.input}
          placeholder="Kata Sandi Saat Ini"
          secureTextEntry={true}
          value={currentPassword}
          onChangeText={text => setCurrentPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Kata Sandi Baru"
          secureTextEntry={true}
          value={newPassword}
          onChangeText={text => setNewPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Konfirmasi Kata Sandi Baru"
          secureTextEntry={true}
          value={confirmNewPassword}
          onChangeText={text => setConfirmNewPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={changePassword}>
          <Text style={styles.buttonText}>Simpan Kata Sandi Baru</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // ... styles yang sebelumnya ...

  input: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  changePassword: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
});

export default ProfileScreen;
