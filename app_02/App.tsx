import React, {JSX} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
  ScrollView,
} from 'react-native';
import {Text, Card} from './components';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.h1}>Flat Cards</Text>
      <View style={styles.container}>
        <Card text="Box 1" />
        <Card text="Box 2" />
        <Card text="Box 3" />
      </View>

      <Text style={[styles.h1, {paddingTop: 10}]}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <Card text="Box 1" styles={{width: 125, marginRight: 5}} />
        <Card text="Box 2" styles={{width: 125, marginHorizontal: 5}} />
        <Card text="Box 3" styles={{width: 125, marginHorizontal: 5}} />
        <Card text="Box 4" styles={{width: 125, marginHorizontal: 5}} />
        <Card text="Box 5" styles={{width: 125, marginHorizontal: 5}} />
        <Card text="Box 6" styles={{width: 125, marginLeft: 5}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    root: {
      flex: 1,
      paddingTop: 30,
      gap: 10,
      paddingHorizontal: 10,
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
    },
    h1: {
      fontSize: 24,
      fontWeight: 500,
    },
  });

export default App;
