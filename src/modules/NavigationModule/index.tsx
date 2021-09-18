import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from '../../pages/Details';
import HomeScreen from '../../pages/Home';
import {NavigationContainer} from '@react-navigation/native';

export const NavigationModule = props => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer {...props}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Initial Screen'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
