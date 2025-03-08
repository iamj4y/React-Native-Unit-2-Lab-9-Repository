import {useState} from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput, Button } from 'react-native';
import { CheckBox } from '@rneui/themed';

export default function App() {
  const [todoArray, setToDoArray] = useState([
    {key: 0, completed: false, description: "Wash the Dishes"},
    {key: 1, completed: false, description: "Take out the Trash"},
    {key: 2, completed: false, description: "Study for 30 minutes"},
    {key: 3, completed: false, description: "Walk the Dog"}
  ]);

  const [nextId, giveId] = useState(todoArray.length);
  const [newTask, setNewTask] = useState("");

  console.log(nextId)
  

  const toggleCheckbox = (id) => {
    setToDoArray(todoArray.map((item) => 
      item.key === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const isComplete = (status) => {
    if (status) {
      return "Complete";
    } else {
      return "In Progress";
    }
  }

  const handleButton = () => {
      setToDoArray([...todoArray, {key:nextId, completed: false, description: newTask}]);
      giveId(nextId + 1);
      setNewTask("");
      console.log(todoArray)
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your To-Do List</Text>
      <FlatList 
        data = {todoArray}
        renderItem={({ item }) => 
        <View>
          <Text style={[styles.list, item.completed ? styles.completedList : styles.list]}> 
            <CheckBox checked={item.completed} onPress={() => toggleCheckbox(item.key)}></CheckBox>
            {item.description}, <Text style={[styles.statusIncomplete, item.completed ? styles.statusComplete : styles.statusIncomplete]}>{isComplete(item.completed)} </Text>
          </Text> 
          
          </View>}
        keyExtractor={(item) => item.key}>
      </FlatList>
      <View style={styles.controlElem}>
        <TextInput 
          placeholder="Enter Task Description..."
          onChangeText={textInpt => setNewTask(textInpt)}
          value={newTask}
          style={styles.input}></TextInput>
        <Button onPress={handleButton} title='Add Task to List'></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  title: {
    margin: 60,
    fontSize: 50,
    fontWeight: 'bold'
  },

  list: {
    textDecorationLine: 'none',
    textDecorationStyle: 'solid',
  },
  
  completedList: {
    color: '#92dea5',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: '#065e16'
  },

  statusIncomplete: {
    color: '#c20c0c',
    fontWeight: 'bold'
  },

  statusComplete: {
    color: '#92dea5'
  },

  input: {
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 4,
    color: '#807f7e',
    height: 50,
    width: 200,
    padding: 10,
    margin: 8
  },

  controlElem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 200,
  }
});
