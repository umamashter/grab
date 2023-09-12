import * as React from 'react';
import {View, useWindowDimensions, Image, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import {TabView, SceneMap} from 'react-native-tab-view';

const NotifikationRoute = () => (
  <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
    <View
      style={{
        marginHorizontal: 'auto',
        height: 30,
        width: 500,
        backgroundColor: '#EEEEEE',
        marginTop: -20,
        elevation: 4,
        marginStart: -25,
        borderRadius: 10,
      }}>
      <Text style={{fontWeight: 'bold', marginTop: 5, marginLeft: 20}}>
        06 Sep 2023
      </Text>
    </View>
    <Text style={{marginTop: 20}}>
      Transfer Rp300.000 Ke Dana TOP UP KHOXXX UMXXX berhasil. Kamu dikenakan
      biaya transfer Rp2.500
    </Text>
    <View
      style={{
        marginHorizontal: 'auto',
        height: 30,
        width: 500,
        backgroundColor: '#EEEEEE',
        marginTop: 20,
        elevation: 4,
        marginStart: -25,
        borderRadius: 10,
      }}>
      <Text style={{fontWeight: 'bold', marginTop: 5, marginLeft: 20}}>
        26 Maret 2023
      </Text>
    </View>
    <Text style={{marginTop: 20}}>
      Mechant PAYERMAX - Top Up mengirim dana sebesar Rp1.150.000
    </Text>
    <View
      style={{
        marginHorizontal: 'auto',
        height: 30,
        width: 500,
        backgroundColor: '#EEEEEE',
        marginTop: 20,
        elevation: 4,
        marginStart: -25,
        borderRadius: 10,
      }}>
      <Text style={{fontWeight: 'bold', marginTop: 5, marginLeft: 20}}>
        12 Feb 2023
      </Text>
    </View>
    <Text style={{marginTop: 20}}>
      Berhasil Top Up saldo sebesar Rp2.000.000
    </Text>
    <View
      style={{
        height: 0.8,
        backgroundColor: '#adadad',
        marginTop: 20,
        marginHorizontal: -30,
      }}></View>
  </View>
);

const PesanRoute = () => (
  <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
    <View
      style={{
        marginHorizontal: 'auto',
        height: 300,
        width: 450,
        backgroundColor: '#FFFDE7',
        marginTop: -10,
        elevation: 4,
        marginStart: -25,
        borderRadius: 10,
      }}>
      <Text style={{marginLeft: 30, marginTop: 10}}>berakhir 29 mei 2023</Text>
      <Image
        source={{
          uri: 'https://foto.kontan.co.id/IiyrJYSoqX1OzMXcQpdhI1cvs8g=/smart/2022/09/11/629377473p.jpg',
        }}
        style={{
          width: 380,
          height: 150,
          marginTop: 5,
          marginLeft: 40,
          borderRadius: 10,
        }}
      />

      <Text
        style={{
          fontWeight: 'bold',
          marginTop: 10,
          marginLeft: 30,
        }}>
        Grab Imbangi Kenaikan Tarif dengan Layanan Baru serta Promo Ekonomis
      </Text>
      <Text style={{marginLeft: 30}}>
        ILUSTRASI. Grab, aplikasi superapp terkemuka di Asia Tenggara, berupaya
        untuk terus membantu terjaganya pendapatan mitra pengemudi, dengan
        melakukan penyesuaian tarif untuk layanan transportasi, mulai 11
        September 2022 pukul 00.01 WIB.
      </Text>
    </View>
    <View
      style={{
        marginHorizontal: 'auto',
        height: 300,
        width: 500,
        backgroundColor: '#FFFDE7',
        marginTop: 1,
        elevation: 4,
        marginStart: -25,
        borderRadius: 10,
      }}>
      <Text style={{marginLeft: 30, marginTop: 5}}>Berahir 23 mei 2023</Text>
      <Image
        source={{
          uri: 'https://lh3.googleusercontent.com/Oi3ffeC3PqoGjHCWYiig6W2AeD2jYOIBiTRVMt8Is9_9anmFnPZV0kb34icv3SaiFkVIzBQK9gI0mWyzWXfRtztjF7orKpmB_d1HoP8ODGGxY0Zl74nmBNpviZ_oKjQwYdKHh9aItA=w2400',
        }}
        style={{
          width: 380,
          height: 150,
          marginTop: 5,
          marginLeft: 40,
          borderRadius: 10,
        }}
      />

      <Text
        style={{
          fontWeight: 'bold',
          marginTop: 10,
          marginLeft: 30,
        }}>
        Grab Indonesia – Rekomendasi Mobil Kecil Murah yang Mendukung
        Mobilitasmu!
      </Text>
      <Text style={{marginLeft: 30}}>
        Untuk menunjang mobilitas harian, memilih kendaraan yang sesuai kondisi
        lalu lintas sangat penting untuk dipertimbangkan. Padatnya perjalanan
        hingga jalan yang padat dan sempit, membuat kebanyakan orang lebih
        memilih menggunakan mobil ukuran kecil.
      </Text>
    </View>
  </ScrollView>
);

const renderScene = SceneMap({
  notifikation: NotifikationRoute,
  pesan: PesanRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'notifikation', title: 'Notifikation (2)'},
    {key: 'pesan', title: 'Pesan (3)'},
  ]);

  return (
    <View style={{flex: 1, marginTop: 18}}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
}
