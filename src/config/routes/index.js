import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ion from 'react-native-vector-icons/Ionicons';
import {
  Home,
  Activity,
  Inbox,
  Account,
  Payment,
  Food,
  Login,
  VerifikasiOtp,
  Bike,
  Pulsa,
  Isi,
  Doctor,
  Subscribe,
  More,
  Car,
  Deliver,
  Pay,
  Reward,
  Ubahsandi,
  Email,
  Otentikasi,
  Kelola,
  Edit,
  Logout,
  Kartu,
  Isiulang,
} from '../../page';

const MaterialBottom = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    //headerMode="none"
    initialRouteName="Login">
    <Stack.Screen
      name="Home"
      component={BottomTabs}
      options={{
        title: 'Home',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Isi"
      component={Isi}
      options={{
        title: 'Top Up',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Reward"
      component={Reward}
      options={{
        title: 'Reward Saya',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Pay"
      component={Pay}
      options={{
        title: 'Pembayaran',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Food"
      component={Food}
      options={{
        title: 'Menu ',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Bike"
      component={Bike}
      options={{
        title: 'Transport',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="More"
      component={More}
      options={{
        title: 'Lainnya',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Car"
      component={Car}
      options={{
        title: 'Transport',
        headerShown: true,
      }}
    />

    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: 'Login',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="VerifikasiOtp"
      component={VerifikasiOtp}
      options={{
        title: 'ValidasiOtp',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Payment"
      component={Payment}
      options={{
        title: 'Payment',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Pulsa"
      component={Pulsa}
      options={{
        title: 'Pulsa/Token ',
        headerShown: true,
      }}
    />

    <Stack.Screen
      name="Doctor"
      component={Doctor}
      options={{
        title: 'Kesehatan',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Subscribe"
      component={Subscribe}
      options={{
        title: 'Diskon ',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Deliver"
      component={Deliver}
      options={{
        title: 'Diskon ',
        headerShown: true,
      }}
    />

    <Stack.Screen
      name="Ubahsandi"
      component={Ubahsandi}
      options={{
        title: 'Ubah Kata Sandi ',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Email"
      component={Email}
      options={{
        title: 'Ubah Email',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Otentikasi"
      component={Otentikasi}
      options={{
        title: 'Otentikasi',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Kelola"
      component={Kelola}
      options={{
        title: 'Kelola',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Edit"
      component={Edit}
      options={{
        title: 'Edit Profile',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Kartu"
      component={Kartu}
      options={{
        title: 'Tambahkan Card',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Isiulang"
      component={Isiulang}
      options={{
        title: 'Isi ulang',
        headerShown: true,
      }}
    />
  </Stack.Navigator>
);

const BottomTabs = () => {
  return (
    <MaterialBottom.Navigator
      shifting={false}
      initialRouteName="Home"
      activeColor="rgb(34, 139, 35)"
      barStyle={{
        backgroundColor: 'white',
        borderWidth: 0.3,
        borderColor: 'lightgrey',
      }}>
      <MaterialBottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <View>
              <Ion name="home" size={27} color="#575757" />
            </View>
          ),
        }}
      />

      <MaterialBottom.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({color}) => (
            <View>
              <Ion name="layers-outline" size={27} color="#575757" />
            </View>
          ),
        }}
      />
      <MaterialBottom.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({color}) => (
            <View>
              <Ion name="mail-open-outline" size={25} color="#575757" />
            </View>
          ),
        }}
      />
      <MaterialBottom.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Payment',
          tabBarIcon: ({color}) => (
            <View>
              <Ion name="wallet-outline" size={27} color="#575757" />
            </View>
          ),
        }}
      />
      <MaterialBottom.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarLabel: 'Acoount',
          tabBarIcon: ({color}) => (
            <View>
              <Ion name="person-circle-outline" size={27} color="#575757" />
            </View>
          ),
        }}
      />
    </MaterialBottom.Navigator>
  );
};

export default class index extends Component {
  render() {
    return (
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    );
  }
}
