import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';

const DeliveryScreen = () => {
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryInstructions, setDeliveryInstructions] = useState('');
  const [products, setProducts] = useState([
    {id: '1', name: 'Nasi Goreng', price: 'Rp 25,000', discount: '10%'},
    {id: '2', name: 'Mie Ayam', price: 'Rp 20,000', discount: '5%'},
    {id: '3', name: 'Es Teh Manis', price: 'Rp 5,000', discount: '15%'},
    {id: '4', name: 'Es Jeruk', price: 'Rp 7,000', discount: '20%'},
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    // Menambahkan produk ke dalam keranjang belanja
    setCart([...cart, product]);
  };

  const calculateTotalPrice = () => {
    // Menghitung total harga dari produk yang ada di keranjang belanja
    return cart.reduce((total, product) => {
      const priceWithoutDiscount = parseInt(product.price.replace(/\D/g, ''));
      const discount = parseInt(product.discount.replace(/\D/g, '')) / 100;
      const discountedPrice =
        priceWithoutDiscount - priceWithoutDiscount * discount;
      return total + discountedPrice;
    }, 0);
  };

  const submitDelivery = () => {
    // Di sini Anda dapat mengambil informasi pengiriman yang dimasukkan oleh pengguna
    // dan melakukan tindakan seperti validasi atau mengirim pesanan ke server.

    // Misalnya:
    if (deliveryAddress && cart.length > 0) {
      // Lakukan validasi dan tindakan lainnya di sini.
      // Jika semuanya valid, Anda dapat mengirimkan pesanan.
      const totalHarga = calculateTotalPrice();
      alert(`Pesanan berhasil dikirim dengan total harga Rp ${totalHarga}`);
    } else {
      alert(
        'Mohon isi alamat pengiriman dan tambahkan produk ke keranjang belanja',
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Alamat Pengiriman</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan alamat pengiriman"
        value={deliveryAddress}
        onChangeText={text => setDeliveryAddress(text)}
      />

      <Text style={styles.label}>Instruksi Pengiriman (opsional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan instruksi pengiriman (contoh: masuk melalui pintu belakang)"
        value={deliveryInstructions}
        onChangeText={text => setDeliveryInstructions(text)}
      />

      <Text style={styles.sectionTitle}>Produk Makanan dan Minuman</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>Harga: {item.price}</Text>
            <Text style={styles.productDiscount}>Diskon: {item.discount}</Text>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={() => addToCart(item)}>
              <Text style={styles.addToCartButtonText}>
                Tambahkan ke Keranjang
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>Keranjang Belanja</Text>
      {cart.length === 0 ? (
        <Text>Keranjang belanja Anda kosong.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.cartItem}>
              <Text>{item.name}</Text>
              <Text>Harga: {item.price}</Text>
              <Text>Diskon: {item.discount}</Text>
            </View>
          )}
        />
      )}

      <Text style={styles.totalPrice}>
        Total Harga: Rp {calculateTotalPrice()}
      </Text>

      <Text style={styles.paragraph}>
        Mohon pastikan alamat pengiriman yang Anda masukkan adalah benar dan
        lengkap. Instruksi pengiriman bersifat opsional dan dapat Anda isi jika
        diperlukan.
      </Text>

      <TouchableOpacity style={styles.submitButton} onPress={submitDelivery}>
        <Text style={styles.submitButtonText}>Kirim Pesanan</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  productItem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
  productDiscount: {
    fontSize: 16,
    color: 'red',
  },
  addToCartButton: {
    backgroundColor: 'blue',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addToCartButtonText: {
    color: 'white',
  },
  cartItem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  paragraph: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default DeliveryScreen;
