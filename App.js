import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';

const App = () => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInpHandler = (e) => {
    setEnteredGoal(e);
  };

  const addGoalHandler = () => {
    if (enteredGoal.trim().length === 0) {
      alert('Enter a valid goal');
      return;
    }
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoal,
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal here"
          style={styles.textInput}
          onChangeText={goalInpHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      <View style={styles.list}>
        <ScrollView>
          {courseGoals.map((el) => (
            <View style={styles.goal} key={Math.random()}>
              <Text style={styles.goalText}>{el}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 70,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: '#d8e8e6',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 2,
    padding: 5,
  },
  list: {
    flex: 5,
  },
  goal: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
    alignItems: 'center',
  },
  goalText: {
    color: 'white',
  },
});

export default App;
