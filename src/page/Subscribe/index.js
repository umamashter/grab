import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [discounts, setDiscounts] = useState([
    {
      id: 1,
      name: 'Grab Unlimited',
      code: 'DISC10',
      description: 'Uji coba gratis 8 minggu',
    },
    {
      id: 2,
      name: 'Paketan Pulsapora',
      code: 'DISC20',
      description: 'Diskon 20% untuk pembelian di atas Rp200.000.',
    },
    {
      id: 3,
      name: 'Ongkir Flat Unlimited',
      code: 'FREEDEL',
      description: 'Uji coba gratis selama 2 minggu',
    },
  ]);

  const handleDiscountPress = code => {
    // Implementasikan logika untuk mengaktifkan diskon di sini
    // Misalnya, menerapkan diskon ke keranjang belanja.
    console.log(`Diskon dengan kode ${code} telah diaktifkan`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu Diskon</Text>
      {discounts.map(discount => (
        <TouchableOpacity
          key={discount.id}
          style={styles.discountCard}
          onPress={() => handleDiscountPress(discount.code)}>
          <Text style={styles.discountName}>{discount.name}</Text>
          <Text style={styles.discountDescription}>{discount.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  discountCard: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  discountName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  discountDescription: {
    fontSize: 14,
    marginTop: 8,
  },
});

export default App;
