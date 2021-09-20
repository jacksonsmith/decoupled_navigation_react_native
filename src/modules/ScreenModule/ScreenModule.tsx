import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const ScreenModule = (screens: any) => ({
  build: () => {
    return (
      <>
        {screens.map(item => {
          return (
            <Stack.Screen
              name={item.name}
              component={item.component}
              options={item.options}
              // @ts-ignore
              key="{item}"
            />
          );
        })}
      </>
    );
  },
});
