import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PromoItemsSub from './PromoItemsSub';

const PromoItems = () => {
  return (
    <View
      style={{
        marginHorizontal: 18,
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}>
      <PromoItemsSub
        image={{
          uri: 'https://blog.mokapos.com/hs-fs/hubfs/inspirasi%20foto%20makanan%20yang%20enak%20-%20chicken%20nugget.jpg?width=1200&height=800&name=inspirasi%20foto%20makanan%20yang%20enak%20-%20chicken%20nugget.jpg',
        }}
        text="Makan khas betawi"
        diskon="Diskon 40%"
        masaBerlaku="Unit 19 april"
      />
      <PromoItemsSub
        image={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UzdaCWX6-mitCcMWNEYAthMvPTL8TnehivDLlLeCVw&s',
        }}
        text="Sate khas madura"
        diskon="Diskon 25%"
        masaBerlaku="Unit 14 mei"
      />
      <PromoItemsSub
        image={{
          uri: 'https://awsimages.detik.net.id/community/media/visual/2022/04/04/bakso-malang-17_43.jpeg?w=600&q=90',
        }}
        text="Bakso malang"
        diskon="Diskon 50%"
        masaBerlaku="Unit 19 maret"
      />
      <PromoItemsSub
        image={{
          uri: 'https://awsimages.detik.net.id/community/media/visual/2019/04/24/de2758a6-ea38-4ae9-8c4b-f2b395a81a22_43.png?w=650&q=80',
        }}
        text="Nasi padang"
        diskon="Diskon 20%"
        masaBerlaku="Unit 10 april"
      />
    </View>
  );
};
export default PromoItems;
