import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Screen from '../pages/Screen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen 
        name="Home"
        component={Home}
      />

      <Stack.Screen 
        name="Screen"
        component={Screen}
      />
    </Stack.Navigator>
  );
}
export default Routes;