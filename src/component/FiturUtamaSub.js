import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  imageFeatureUtama: {
    height: 55,
    width: 55,
    marginTop: 15,
  },
  textFeatureUtama: {
    textAlign: 'center',
    marginTop: 4,
  },
});
// const FiturUtamaSub = props => {
//   return (
//     <View style={{width: '25%', alignItems: 'center'}}>
//       <Image style={styles.imageFeatureUtama} source={props.image} />
//       <Text style={styles.textFeatureUtama}>{props.title}</Text>
//     </View>
//   );
// };
class FiturUtamaSub extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{width: '25%', alignItems: 'center'}}>
        <Image style={styles.imageFeatureUtama} source={this.props.image} />
        <Text style={styles.textFeatureUtama}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
export default FiturUtamaSub;
