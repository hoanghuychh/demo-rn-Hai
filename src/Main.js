import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class App extends Component { navigation
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />

        <View>
          <Text>các Môn Học:{ startDate }</Text>
        </View>
        <TouchableOpacity style={styles.logout_button}
        onPress ={()=>{
          navigation.navigate('Login');
        }}>
        
        <Text style={styles.logouttext}>Đăng Xuất</Text>
      </TouchableOpacity>
    
      </View>
       
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
  logout_button: {
    padding: 10,
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "white",
  },
});