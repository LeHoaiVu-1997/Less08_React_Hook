import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ExampleStateFunction from './src/components/ExmapleStateFunction';

export default function App(){
  return (
    <View style={styles.container}>
      <View style={styles.clickMeContainer}>
        <ExampleStateFunction />
      </View>
      <View style={styles.otherContainer}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  clickMeContainer: {
    flex: 5
  },
  otherContainer: {
    flex: 5,
    backgroundColor: 'yellow'
  }
})