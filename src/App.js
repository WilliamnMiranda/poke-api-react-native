import { StyleSheet, Text, View,StatusBar  } from 'react-native';
import Navigation from './navigation'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
