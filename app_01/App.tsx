import React, {JSX} from 'react';
import {
  Text,
  View,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
} from 'react-native';

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
          Hello, world!
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: '#ffffff',
  },
  blackText: {
    color: '#000000',
  },
});

export default App;
