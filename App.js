/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationModule} from './src/modules/NavigationModule';
import HomeScreen from './src/pages/Home';
import DetailsScreen from './src/pages/Details';
import {ScreenModule} from './src/modules/ScreenModule/ScreenModule';

function buildScreens() {
  const screens = [];

  screens.push(
    {
      name: 'Home',
      component: HomeScreen,
      options: {title: 'Initial Screen'},
    },
    {
      name: 'Details',
      component: DetailsScreen,
      options: {title: 'Details Screen'},
    },
  );

  return ScreenModule(screens).build();
}

class App extends React.Component<{}> {
  render() {
    const screensBuilded = buildScreens();

    return <NavigationModule build={screensBuilded} />;
  }
}

export default App;
