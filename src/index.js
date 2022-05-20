import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import Login from "./Login";
import Main from "./Main";
const Stack = createNativeStackNavigator();
export default RootComponent = {} = function(){
    return(
        <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
        
    )
}