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
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [ovoPoints, setOvoPoints] = useState(5000); // Saldo awal OVO Points
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [currentEmail, setCurrentEmail] = useState('contoh@email.com');
  const [newEmail, setNewEmail] = useState('');

  const redeemPoints = () => {
    // Fungsi penukaran poin (seperti yang telah diberikan sebelumnya)
    // ...
  };

  const changePassword = () => {
    // Fungsi untuk mengubah kata sandi (seperti yang telah diberikan sebelumnya)
    // ...
  };

  const changeEmail = () => {
    // Di sini Anda dapat menambahkan logika untuk mengubah alamat email.
    // Anda perlu memeriksa apakah kata sandi saat ini benar, apakah alamat email baru sesuai, dll.

    if (
      currentPassword === 'katasandilama' &&
      newEmail &&
      newEmail !== currentEmail
    ) {
      // Simpan alamat email baru ke server atau penyimpanan lokal sesuai kebutuhan Anda.
      // Misalnya: saveNewEmailToServer(newEmail);

      setCurrentEmail(newEmail);
      setNewEmail('');

      Alert.alert('Berhasil', 'Alamat email berhasil diubah.');
    } else {
      Alert.alert(
        'Kesalahan',
        'Kata sandi saat ini salah atau alamat email baru tidak valid.',
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
            onPress={() => navigation.navigate('Ubahsandi')}>
            Ubah Kata Sandi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text
            style={styles.settingText}
            onPress={() => navigation.navigate('Email')}>
            Ubah Alamat Email
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

      {/* Bagian Ubah Alamat Email */}
      <View style={styles.changeEmail}>
        <Text style={styles.sectionHeader}>Ubah Alamat Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Kata Sandi Saat Ini"
          secureTextEntry={true}
          value={currentPassword}
          onChangeText={text => setCurrentPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Alamat Email Baru"
          value={newEmail}
          onChangeText={text => setNewEmail(text)}
        />
        <TouchableOpacity style={styles.button} onPress={changeEmail}>
          <Text style={styles.buttonText}>Simpan Alamat Email Baru</Text>
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
  changeEmail: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
});

export default ProfileScreen;
