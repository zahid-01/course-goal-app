import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  const addGoalHandler = (goal) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goal, key: Math.random() },
    ]);
  };

  const deleteGoalHandler = (id, emm) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((el) => el.key !== id)
    );
  };

  const modalVisibilityHandler = () => {
    setModalVisibility((prevState) => !prevState);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add Goal"
          color="#5e0a33"
          onPress={modalVisibilityHandler}
        />
        {modalVisibility && (
          <GoalInput
            saveGoals={addGoalHandler}
            modalVisibility={modalVisibilityHandler}
          />
        )}

        <GoalItem goalsArray={courseGoals} deleteGoal={deleteGoalHandler} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15,
  },
});

export default App;
