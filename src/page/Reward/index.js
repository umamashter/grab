import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

class PusaPromoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.promoButton}
            onPress={this.toggleModal}>
            <Image
              source={{
                uri: 'https://assets.grab.com/wp-content/uploads/sites/9/2020/08/18171957/Airtime_flashsale_landingpage-1.jpg',
              }}
              style={{
                width: 200,
                height: 100,
                borderRadius: 10,
              }}
            />
            <Text style={{color: 'black'}}>Diskon Pulsa/Paket Data 20rb</Text>
            <Text style={{color: 'black'}}>20,000 OVO Poin</Text>
            <Text style={styles.buttonText}>Tukar sekarang</Text>
          </TouchableOpacity>
          <View
            style={{
              height: 0.8,
              width: 370,
              backgroundColor: 'white',
              marginTop: 5,
              marginHorizontal: 15,
            }}></View>
          <TouchableOpacity
            style={styles.promoButton}
            onPress={this.toggleModal}>
            <Image
              source={{
                uri: 'https://assets.grab.com/wp-content/uploads/sites/9/2020/09/09124336/PulsaPora_turunharga_sept2020_landingpage.jpg',
              }}
              style={{
                width: 200,
                height: 100,
                borderRadius: 10,
              }}
            />
            <Text style={{color: 'black'}}>Diskon Pulsa/Paket Data 50rb</Text>
            <Text style={{color: 'black'}}>50,000 OVO Poin</Text>
            <Text style={styles.buttonText}>Tukar sekarang</Text>
          </TouchableOpacity>
          <View
            style={{
              height: 0.8,
              width: 370,
              backgroundColor: 'white',
              marginTop: 5,
              marginHorizontal: 15,
            }}></View>
          <TouchableOpacity
            style={styles.promoButton}
            onPress={this.toggleModal}>
            <Image
              source={{
                uri: 'https://assets.grab.com/wp-content/uploads/sites/9/2020/02/13152503/OVO-Airtime-Valentine-Discount.jpg',
              }}
              style={{
                width: 200,
                height: 100,
                borderRadius: 10,
              }}
            />
            <Text style={{color: 'black'}}>Diskon Pulsa/Paket Data 30rb</Text>
            <Text style={{color: 'black'}}>30,000 OVO Poin</Text>
            <Text style={styles.buttonText}>Tukar sekarang</Text>
          </TouchableOpacity>
          <View
            style={{
              height: 0.8,
              width: 370,
              backgroundColor: 'white',
              marginTop: 5,
              marginHorizontal: 15,
            }}></View>
          <TouchableOpacity
            style={styles.promoButton}
            onPress={this.toggleModal}>
            <Image
              source={{
                uri: 'https://assets.grab.com/wp-content/uploads/sites/9/2019/07/31153701/airtime-cashback20_aug_landingpage.gif',
              }}
              style={{
                width: 200,
                height: 100,
                borderRadius: 10,
              }}
            />
            <Text style={{color: 'black'}}>Diskon Pulsa/Paket Data 25rb</Text>
            <Text style={{color: 'black'}}>25,000 OVO Poin</Text>
            <Text style={styles.buttonText}>Tukar sekarang</Text>
          </TouchableOpacity>
          <View
            style={{
              height: 0.8,
              width: 370,
              backgroundColor: 'white',
              marginTop: 5,
              marginHorizontal: 15,
            }}></View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.isModalVisible}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>
                  Ovo poin tidak cukup untuk menukar
                </Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={this.toggleModal}>
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
    backgroundColor: '#81C784',
    borderBlockColor: 'white',
  },
  promoButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default PusaPromoScreen;
