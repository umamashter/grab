import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const navigateToBooking = () => {
    // Implementasikan logika navigasi ke halaman pemesanan (GrabCar) di sini.
    // Ini mungkin melibatkan penggunaan React Navigation atau alat navigasi lainnya.
    console.log('Navigasi ke halaman pemesanan');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pemesanan Grab</Text>
      <TouchableOpacity style={styles.menuItem} onPress={navigateToBooking}>
        <Text style={styles.menuText}>Pesan GrabCar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={navigateToBooking}>
        <Text style={styles.menuText}>Pesan GrabBike</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={navigateToBooking}>
        <Text style={styles.menuText}>Pesan GrabFood</Text>
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
