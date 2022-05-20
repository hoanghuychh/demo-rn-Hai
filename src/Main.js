import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const App = () => {
  const navigation = useNavigation ();
  const baseUrl = 'https://5e9e9d4afb467500166c42fe.mockapi.io/api/v1';
  const [selectedStartDate, setSelectedStartDate] = useState (null);
  const [tkbSelected, setTkbSelected] = useState (null);
  const onDateChange = async (date) => {{
    const tkb = await checkTkb(date)
    console.log('====================================');
    console.log('tkb: ' + tkb);
    console.log('====================================');
    setTkbSelected(tkb)
  }};

  const checkTkb = async (date) => {
    const response = await axios.get (`${baseUrl}/tkb`);
    if (response.status === 200) {
      console.log('====================================');
      console.log(response.data);
      console.log('====================================');
      const itemTkbs = response.data.find (itemTkb => {
        if (moment (itemTkb.day).format ('MM/DD/YYYY') === moment (date).format ('MM/DD/YYYY'))
          return itemTkb
        });
        console.log('====================================');
        console.log('itemTkbs',itemTkbs);
        console.log('====================================');
      if(itemTkbs && itemTkbs.id)
      return itemTkbs
    }
    return null;
  };
  const onCheckIn = () => {
    
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrapHeader}>
        <Text style={styles.title}>Thời khoá biểu</Text>
        <Image style={styles.iconProfile} source={require ('./image/iconProfile.jpeg')} />
      </View>
      <CalendarPicker onDateChange={onDateChange} />
      <View>
        <Text>các Môn Học:{ tkbSelected&& tkbSelected.name }</Text>
        <Text>các Môn Học:{ tkbSelected&& tkbSelected.tiet }</Text>
      </View>
      <TouchableOpacity
        style={styles.logout_button}
        onPress={() => {
          navigation.navigate ('Login');
        }}
      >
        <Text style={styles.logouttext}>Đăng Xuất</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tkbSelected&& tkbSelected.statusCheckin ? styles.logout_button_active: styles.logout_button}
        onPress={onCheckIn}
      >
        <Text style={styles.logouttext}>diem danh</Text>
      </TouchableOpacity>

    </View>
  );
};
export default App;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 30,
  },
  logout_button: {
    padding: 10,
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'white',
  },
  logout_button_active: {
    padding: 10,
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'red',
  },
  wrapHeader: {
    display: 'flex',
    height: 50,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconProfile: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    position: 'absolute',
    right: 30,
  }
})
