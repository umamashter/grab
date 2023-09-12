import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');

  const startEditingProfile = () => {
    setIsEditing(true);
  };

  const saveEditedProfile = () => {
    // Di sini Anda dapat menyimpan perubahan profil ke server atau penyimpanan lokal.
    // Misalnya: saveProfileChangesToServer({ name, email });

    setIsEditing(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.profileHeaderText}>Profil</Text>
      </View>

      <View style={styles.profileInfo}>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Nama"
          />
        ) : (
          <Text style={styles.infoText}>Nama: {name}</Text>
        )}

        {isEditing ? (
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Email"
          />
        ) : (
          <Text style={styles.infoText}>Email: {email}</Text>
        )}
      </View>

      <View style={styles.actions}>
        {isEditing ? (
          <TouchableOpacity style={styles.button} onPress={saveEditedProfile}>
            <Text style={styles.buttonText}>Simpan</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={startEditingProfile}>
            <Text style={styles.buttonText}>Edit Profil</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileInfo: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  infoText: {
    fontSize: 18,
  },
  actions: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProfileScreen;
