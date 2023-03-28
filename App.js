import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

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
      { text: enteredGoal, key: Math.random() },
    ]);
  };

  return (
    <View style={styles.container}>
      <GoalInput goalInput={goalInpHandler} saveGoals={addGoalHandler} />
      <GoalItem goalsArray={courseGoals} />
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
});

export default App;
