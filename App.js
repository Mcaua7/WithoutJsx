import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CollumnJsx } from './components/Collumn';
import { CollumnWithoutJSX } from './components/CollumnWithoutJsx';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <CollumnJsx></CollumnJsx>
      </View>

      <View>
        <CollumnWithoutJSX></CollumnWithoutJSX>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },

  div: {
    padding: 20
  }
});
