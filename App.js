import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from './components/MainScreen';

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
})

export default createAppContainer(AppStackNavigator);