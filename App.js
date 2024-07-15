import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styles from './src/styles';
import ColorBlock from './src/components/feed/ColorBlock';
import Task from './src/components/feed/Task';
import TaskList from './src/components/feed/TaskList';
import { useState } from 'react';


const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    setTaskList([...taskList, task])
  }
  return (
      <View style={styles.container}>

      <View style={styles.feed}>

        <Text style={styles.headerText}>
          Tarefas
        </Text>
        <View style={styles.feedImages}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <TaskList taskList={taskList}/>
     {/* {colors.map((color, index) => (
            <ColorBlock key={index} color={color} />
          ))}
*/}
          </ScrollView>
        </View>
        <StatusBar style={{ color:'green'}} />
      </View>
          <Task onAddTask={handleAddTask} />
      <View style={{alignItems: 'flex-end', justifyContent:'space-around', flexDirection: 'row', gap: 40, marginBottom: 30}}>
        <Text> Explorar </Text>
        <Text> Tarefas </Text>
        <Text> Perfil </Text>
      </View>
  </View>
  );
}
