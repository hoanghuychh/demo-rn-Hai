import React, {Componet} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    View,
    Text,
    SafeAreaView
} from 'react-native'
import Login from "./Login";
import Main from "./Main";
const Stack = createNativeStackNavigator();
export default RootComponent = {} = function(){
    return(
        <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
        
    )
}