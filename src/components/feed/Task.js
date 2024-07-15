import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";


const Task = ({ onAddTask }) => {
    const [task, setTask] = useState(0);

    return <View style={[taskStyle.task]}>
        <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5' }}
            onChangeText={text => setTask(text)}
            value={task}
        >
        </TextInput>
        <Button
            title= 'Adicionar Tarefa'
            onPress={ () => {onAddTask(task); setTask('')}}
          //  disabled = { pressedCount > 2 }
        >
        </Button>
    </View>
}

const taskStyle = StyleSheet.create({
task: {
    border: '2px',
    textAlign: 'left',
    backgroundColor: 'pink',
    textDecorationColor: 'pink',
    margin: 20,
    marginBottom: 50,
}
})

export default Task;