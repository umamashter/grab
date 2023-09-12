import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class AddCreditCardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      cardHolderName: '',
      expirationDate: '',
      cvv: '',
    };
  }

  handleAddCard = () => {
    // Add your logic to send credit card details securely to a server for processing and storage.
    // Make sure to use a secure server and follow best practices for handling payment information.

    // Clear the form fields after successful submission.
    this.setState({
      cardNumber: '',
      cardHolderName: '',
      expirationDate: '',
      cvv: '',
    });

    alert('Kartu kredit berhasil ditambahkan!');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Tambahkan Kartu kredit</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama Kartu "
          onChangeText={text => this.setState({cardNumber: text})}
          value={this.state.cardNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Nama pemegang kartu"
          onChangeText={text => this.setState({cardHolderName: text})}
          value={this.state.cardHolderName}
        />
        <TextInput
          style={styles.input}
          placeholder="Tanggal Kedaluwarsa (MM/YY)"
          onChangeText={text => this.setState({expirationDate: text})}
          value={this.state.expirationDate}
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          onChangeText={text => this.setState({cvv: text})}
          value={this.state.cvv}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleAddCard}>
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#81C784',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    color: 'white',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddCreditCardScreen;
