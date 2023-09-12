import React, {Component} from 'react';
import {Text, ScrollView, Button, View, Image} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
            <Image
              source={{
                uri: 'https://chemilan.com.my/wp-content/uploads/2020/03/nasi-lemak-featured-1024x576.jpg',
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
              }}
            />
            <View style={{marginLeft: 10, padding: 7}}>
              <Text>Nasi Goreng Kambing</Text>
              <Text>Rp 30.000</Text>
              <View>
                <Text>Diskon 20%</Text>
                <Button
                  title="Beli Sekarang"
                  color="#388E3C"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </View>
          </View>
          <View
            style={{
              height: 0.8,
              backgroundColor: '#adadad',
              marginTop: 10,
              marginHorizontal: 15,
            }}></View>
        </View>
        <View>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
            <Image
              source={{
                uri: 'https://awsimages.detik.net.id/community/media/visual/2021/06/15/sate-ayam-madura-5_43.jpeg?w=1200',
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
              }}
            />
            <View style={{marginLeft: 10, padding: 7}}>
              <Text>Sate Madura</Text>
              <Text>Rp 15.000</Text>
              <View>
                <Text>Diskon 40%</Text>
                <Button
                  title="Beli Sekarang"
                  color="#388E3C"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </View>
          </View>
          <View
            style={{
              height: 0.8,
              backgroundColor: '#adadad',
              marginTop: 10,
              marginHorizontal: 15,
            }}></View>
        </View>
        <View>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
            <Image
              source={{
                uri: 'https://awsimages.detik.net.id/community/media/visual/2021/02/20/bakso-enak-di-bandung-1_43.jpeg?w=600&q=90',
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
              }}
            />
            <View style={{marginLeft: 10, padding: 7}}>
              <Text>Bakso Khas Bandung</Text>
              <Text>Rp 35.000</Text>
              <View>
                <Text>Diskon 10%</Text>
                <Button
                  title="Beli Sekarang"
                  color="#388E3C"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </View>
          </View>
          <View
            style={{
              height: 0.8,
              backgroundColor: '#adadad',
              marginTop: 10,
              marginHorizontal: 15,
            }}></View>
        </View>
        <View>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
            <Image
              source={{
                uri: 'https://assets.unileversolutions.com/recipes-v2/242794.jpg',
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
              }}
            />
            <View style={{marginLeft: 10, padding: 7}}>
              <Text>Nasi Goreng</Text>
              <Text>Rp 20.000</Text>
              <View>
                <Text>Diskon 25%</Text>
                <Button
                  title="Beli Sekarang"
                  color="#388E3C"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </View>
          </View>
          <View
            style={{
              height: 0.8,
              backgroundColor: '#adadad',
              marginTop: 10,
              marginHorizontal: 15,
            }}></View>
        </View>
        <View>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAeHhNRqNR6mk6CB6z5Sy9zq0_NHsvHwpOwcdOX2wjc0eCrQzkdGsrOGDjmlA18o8chpU&usqp=CAU',
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
              }}
            />
            <View style={{marginLeft: 10, padding: 7}}>
              <Text>Seblak Pedas</Text>
              <Text>Rp 23.000</Text>
              <View>
                <Text>Diskon 10%</Text>
                <Button
                  title="Beli Sekarang"
                  color="#388E3C"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </View>
          </View>
          <View
            style={{
              height: 0.8,
              backgroundColor: '#adadad',
              marginTop: 10,
              marginHorizontal: 15,
            }}></View>
        </View>
        <View>
          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
            <Image
              source={{
                uri: 'https://www.masakapahariini.com/wp-content/uploads/2019/08/mie-ayam-kecap-500x300.jpg',
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
              }}
            />
            <View style={{marginLeft: 10, padding: 7}}>
              <Text>Mie Ayam Kecap</Text>
              <Text>Rp 32.000</Text>
              <View>
                <Text>Diskon 40%</Text>
                <Button
                  title="Beli Sekarang"
                  color="#388E3C"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </View>
          </View>
          <View
            style={{
              height: 0.8,
              backgroundColor: '#adadad',
              marginTop: 10,
              marginHorizontal: 15,
            }}></View>
        </View>
      </ScrollView>
    );
  }
}
