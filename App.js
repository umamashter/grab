import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import imgBanner from './src/images/awan.jpg';
import OvoComponent from './src/component/OvoComponent';
import FiturUtama from './src/component/FiturUtama';
import PromoItems from './src/component/PromoItems';
import Routes from './src/config/routes/index';
const {height, width} = Dimensions.get('window');

class Home extends Component {
  render() {
    return <Routes />;
  }
}

export default Home;
