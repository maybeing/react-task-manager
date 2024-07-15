import { View, Text, FlatList, StyleSheet } from 'react-native';

const TaskList = ({ taskList }) => {
  return (
    <View>
      <FlatList
        data={taskList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={taskStyle}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const taskStyle = StyleSheet.create({
    padding: 20,
    color: 'pink',
    fontWeight: 800,
    backgroundColor: '#f5f5f5',
    margin: 20
})

export default TaskList;