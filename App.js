import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity, View, Button, Alert, Image, SafeAreaView,FlatList } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {

  return <ViewImageScreen />
}

const styles = StyleSheet.create({


});
