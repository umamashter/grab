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
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false); // Status otentikasi dua faktor
  const toggleTwoFactorAuthentication = () => {
    // Di sini Anda dapat menambahkan logika untuk mengaktifkan atau menonaktifkan otentikasi dua faktor.
    // Misalnya, Anda dapat menyimpan status otentikasi dua faktor di server atau penyimpanan lokal.

    if (!isTwoFactorEnabled) {
      // Mengaktifkan otentikasi dua faktor
      // Misalnya: enableTwoFactorAuthentication();
      setIsTwoFactorEnabled(true);

      Alert.alert(
        'Otentikasi Dua Faktor Diaktifkan',
        'Anda telah mengaktifkan otentikasi dua faktor.',
      );
    } else {
      // Menonaktifkan otentikasi dua faktor
      // Misalnya: disableTwoFactorAuthentication();
      setIsTwoFactorEnabled(false);

      Alert.alert(
        'Otentikasi Dua Faktor Dinonaktifkan',
        'Anda telah menonaktifkan otentikasi dua faktor.',
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
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Otentikasi Dua Faktor</Text>
          <Switch
            value={isTwoFactorEnabled}
            onValueChange={toggleTwoFactorAuthentication}
          />
        </View>
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
