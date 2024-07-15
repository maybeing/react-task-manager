import { View, Text, FlatList, StyleSheet } from 'react-native';

const TaskList = ({ taskList }) => {
  return (
    <View>
      <FlatList
        data={taskList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
            <Text style={taskStyle}>{item}</Text>
        )}
      />
    </View>
  );
};

const taskStyle = StyleSheet.create({
    padding: 20,
    color: 'black',
    fontWeight: 600,
    backgroundColor: '#f5f5f5',
    margin: 20,
    textAlign: 'center',
    borderRadius: 8,
    minWidth: 300
})

export default TaskList;