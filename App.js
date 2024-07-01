import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={{ flex: 1}}>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>

        <Text style={{ fontSize: 24, textAlign: 'center' }}>
          Feed
        </Text>
        <View style={{ height: 500, backgroundColor: '#e5e5e5', width: '100%', marginTop: 20 }}>
          <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
          <View style={{ width: 300, height: 300, backgroundColor: 'green' }} />
          <View style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
          <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
          <View style={{ width: 300, height: 300, backgroundColor: 'green' }} />
          <View style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
          </ScrollView>
        </View>
        <StatusBar style={{ color:'green'}} />
      </View>

      <View style={{alignItems: 'flex-end', justifyContent:'space-around', flexDirection: 'row', gap: 40, marginBottom: 30}}>
        <Text> Explorar </Text>
        <Text> Tarefas </Text>
        <Text> Perfil </Text>
      </View>

  </View>
  );
}

/* return (
  <View style={styles.container}>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text style={styles.text}>Hello World</Text>
  <StatusBar style="auto" />

    <View style={{ width: 100, height: 100, backgroundColor: 'orange'}}></View>
    <View style={{ width: 100, height: 100, backgroundColor: 'purple'}}></View>
  </View>
</View>
);
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a992d4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});
