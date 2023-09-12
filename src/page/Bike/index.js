import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Picker} from 'react-native';

const TransportScreen = () => {
  const [vehicles, setVehicles] = useState([
    {
      id: '1',
      name: 'Motor',
      type: 'Sepeda Motor',
      price: 'Rp 10,000',
      deliveryLocation: 'Kantor',
    },
    {
      id: '2',
      name: 'Mobil',
      type: 'Mobil Sedan',
      price: 'Rp 50,000',
      deliveryLocation: 'Perumahan',
    },
    {
      id: '3',
      name: 'Sepeda',
      type: 'Sepeda Biasa',
      price: 'Rp 5,000',
      deliveryLocation: 'Kantor',
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Kendaraan</Text>
      <Text style={styles.paragraph}>
        Selamat datang di aplikasi kami! Berikut adalah daftar kendaraan yang
        tersedia untuk Anda pilih. Setiap kendaraan memiliki informasi seperti
        nama, tipe, harga, dan lokasi pengiriman.
      </Text>
      <FlatList
        data={vehicles}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.vehicleItem}>
            <Text style={styles.vehicleName}>{item.name}</Text>
            <Text style={styles.vehicleType}>{item.type}</Text>
            <Text style={styles.vehiclePrice}>Harga: {item.price}</Text>
            <Text style={styles.vehicleLocation}>
              Lokasi Pengiriman: {item.deliveryLocation}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    color: 'gray',
  },
  vehicleItem: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  vehicleName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  vehicleType: {
    fontSize: 14,
    color: 'gray',
  },
  vehiclePrice: {
    fontSize: 14,
  },
  vehicleLocation: {
    fontSize: 14,
  },
});

export default TransportScreen;
