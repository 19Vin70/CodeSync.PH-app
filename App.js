import { StyleSheet, SafeAreaView } from 'react-native';
import Navigation from './Navigation';
import Header from './components/Header';

export default function App() {
  return (
    <SafeAreaView style={ styles.container }>
      <Header />
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40
  },
});
