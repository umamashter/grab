import React, {useState} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

const ProductScreen = () => {
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Obat Flu',
      category: 'Obat Umum',
      image: require('../Doctor/dokersp.jpeg'),
    },
    {
      id: '2',
      name: 'Vitamin C',
      category: 'Suplemen',
      image: require('../Doctor/dokersp.jpeg'),
    },
    {
      id: '3',
      name: 'Obat Anak',
      category: 'Obat Anak',
      image: require('../Doctor/dokersp.jpeg'),
    },
    {
      id: '4',
      name: 'Obat Jantung',
      category: 'Obat Spesialis',
      image: require('../Doctor/dokersp.jpeg'),
    },
    // Tambahkan produk dan kategori lain di sini
    {
      id: '5',
      name: 'Obat Pusing',
      category: 'Obat Umum',
      image: require('../Doctor/dokersp.jpeg'),
    },
    {
      id: '6',
      name: 'Kalsium',
      category: 'Suplemen',
      image: require('../Doctor/dokersp.jpeg'),
    },
    {
      id: '7',
      name: 'Sirup Batuk Anak',
      category: 'Obat Anak',
      image: require('../Doctor/dokersp.jpeg'),
    },
  ]);

  const filterProductsByCategory = category => {
    return products.filter(product => product.category === category);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produk Kesehatan</Text>

      <Text style={styles.categoryTitle}>Obat Umum</Text>
      <FlatList
        data={filterProductsByCategory('Obat Umum')}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({item}) => (
          <View style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
          </View>
        )}
      />

      <Text style={styles.categoryTitle}>Suplemen</Text>
      <FlatList
        data={filterProductsByCategory('Suplemen')}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({item}) => (
          <View style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
          </View>
        )}
      />

      <Text style={styles.categoryTitle}>Obat Anak</Text>
      <FlatList
        data={filterProductsByCategory('Obat Anak')}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({item}) => (
          <View style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
          </View>
        )}
      />

      <Text style={styles.categoryTitle}>Obat Spesialis</Text>
      <FlatList
        data={filterProductsByCategory('Obat Spesialis')}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({item}) => (
          <View style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
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
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  productItem: {
    marginRight: 20,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ProductScreen;
