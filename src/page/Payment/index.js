import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [ovoPoints, setOvoPoints] = useState(190000); // Saldo awal OVO Points

  const redeemPoints = () => {
    //funsi ovo point
    const poinYangDitukar = 1000; // Misalnya, tukar 1000 poin.

    if (ovoPoints >= poinYangDitukar) {
      const saldoBaru = ovoPoints - poinYangDitukar;
      setOvoPoints(saldoBaru);

      // Di sini, Anda dapat menambahkan logika untuk melakukan tindakan penukaran poin,
      // seperti mengirim permintaan ke server atau menyimpan data transaksi.

      Alert.alert(
        'Penukaran Berhasil',
        `Berhasil menukar ${poinYangDitukar} OVO Points. Saldo sekarang: ${saldoBaru} Points.`,
      );
    } else {
      Alert.alert(
        'Saldo Tidak Mencukupi',
        'Maaf, saldo OVO Points tidak mencukupi.',
      );
    }
  };
  const logout = () => {
    // Fungsi untuk logout akun.
    // Di sini Anda dapat menghapus token otentikasi atau melakukan tindakan logout yang diperlukan.

    Alert.alert(
      'Konfirmasi Log Out',
      'Apakah Anda yakin ingin keluar dari akun?',
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Log Out',
          onPress: Login => {
            // Implementasikan tindakan logout di sini.
            // Misalnya: clearAuthenticationToken();

            Alert.alert(
              'Log Out Berhasil',
              'Anda telah berhasil keluar dari akun.',
            );
          },
        },
      ],
      {cancelable: false},
    );
  };

  //funsi ovo point

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="#69F0AE"
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#00E676',
          height: 60,
          width: 413,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 20}}>
          Profile
        </Text>
      </TouchableOpacity>
      <View style={styles.profileHeader}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.email}>johndoe@example.com</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Edit')}>
          <Text style={styles.buttonText}>Edit Profil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>Keluar</Text>
        </TouchableOpacity>
      </View>

      {/* Bagian Pengaturan Profil */}
      <View style={styles.settings}>
        <Text style={styles.sectionHeader}>Pengaturan Profil</Text>
        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => navigation.navigate('Ubahsandi')}>
          <Text style={styles.settingText}>Ubah Kata Sandi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => navigation.navigate('Email')}>
          <Text style={styles.settingText}>Ubah Email</Text>
        </TouchableOpacity>
      </View>

      {/* Bagian OVO Points */}
      <View style={styles.ovoPoints}>
        <Text style={styles.sectionHeader}>OVO Points</Text>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>Saldo: {ovoPoints} Points</Text>
          <TouchableOpacity style={styles.pointsButton} onPress={redeemPoints}>
            <Text style={styles.pointsButtonText}>Tukarkan Points</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bagian Keamanan */}
      <View style={styles.security}>
        <Text style={styles.sectionHeader}>Keamanan</Text>
        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => navigation.navigate('Otentikasi')}>
          <Text style={styles.settingText}>Otentikasi Dua Faktor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => navigation.navigate('Kelola')}>
          <Text style={styles.settingText}>Kelola Perangkat</Text>
        </TouchableOpacity>
      </View>

      {/* Bagian Syarat dan Ketentuan */}
      <View style={styles.termsAndConditions}>
        <Text style={styles.sectionHeader}>Syarat dan Ketentuan</Text>
        <TouchableOpacity style={styles.termsItem}>
          <Text style={styles.termsText}>Syarat Penggunaan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.termsItem}>
          <Text style={styles.termsText}>Kebijakan Privasi</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    alignItems: 'center',
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  actions: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: -10,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  settings: {
    marginTop: 10,
    paddingHorizontal: 90,
    alignItems: 'center',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  settingItem: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingVertical: 10,
  },
  settingText: {
    fontSize: 16,
  },
  ovoPoints: {
    marginTop: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  pointsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 16,
    marginTop: 10,
  },
  pointsButton: {
    backgroundColor: 'red',
    color: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  pointsButtonText: {
    color: 'white',
  },
  security: {
    marginTop: 30,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  helpCenter: {
    marginTop: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  helpItem: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingVertical: 10,
  },
  helpText: {
    fontSize: 16,
  },
  termsAndConditions: {
    marginTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  termsItem: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingVertical: 10,
  },
  termsText: {
    fontSize: 16,
  },
  pointsButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  pointsButtonText: {
    color: 'white',
  },
});

export default ProfileScreen;
