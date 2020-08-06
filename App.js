import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './Pages/HomeScreen';
import TopNews from './Pages/TopNews';
import Weather from './Pages/Weather';
import Science from './Pages/Science';
import Technology from './Pages/Technology';
import Sports from './Pages/Sports';
import Puzzles from './Pages/Puzzles';

export default class App extends Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  TopNews: TopNews,
  Weather: Weather,
  Science: Science,
  Technology: Technology,
  Sports: Sports,
  Puzzles: Puzzles,
});
var AppContainer = createAppContainer(AppNavigator);
