import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

export const NavigationModule = props => {
  const Stack = createNativeStackNavigator();

  return (
    // @ts-ignore
    <NavigationContainer>
      <Stack.Navigator>{props.build}</Stack.Navigator>
    </NavigationContainer>
  );
};
