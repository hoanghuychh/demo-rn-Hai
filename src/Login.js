import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Alert, Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function App({navigation}) {
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');
  const baseUrl = 'https://5e9e9d4afb467500166c42fe.mockapi.io/api/v1';

  const checkLogin = async (inputUsername, inputPassword) => {
    const response = await axios.get (`${baseUrl}/login`);
    let isSuccess = false;
    if (response.status === 200) {
      const user = response.data.find (user => {
        if (user.username === inputUsername)
          if (user.password === inputPassword) return user

      });
      if(user && user.id)
      isSuccess = true;
    }
    return isSuccess;
  };

  // const postLogin = async () => {
  //   const response = await axios.post(`${baseUrl}/login`, {
  //     username,
  //     password,
  //   });
  //   if(response)
  //   return response?.id
  // };

  const onLogin = async () => {
    const statusLogin = await checkLogin (username, password)
    if (statusLogin) navigation.navigate ('Main')
    else Alert.alert('Điểm danh không thành công!');
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require ('./image/logo.png')} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Tài Khoản"
          placeholderTextColor="#003f5c"
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Mật Khẩu"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Quên Mật Khẩu?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
        <Text style={styles.loginText}>Đăng Nhập</Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
});
