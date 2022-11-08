import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import Welcome from './components/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome firstName={'Max'}/>
      <Welcome firstName={'Kevin'}/>
      <Text style={styles.bigText} >Cool Cool Cool</Text>
      <Text style={styles.bigText} >🤖</Text>
      <Counter/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  bigText:{
    fontSize:'125vw',
    color: 'lightblue',
  
    
  },
  container: {
    flex: 1,
    backgroundColor: 'hotpink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
