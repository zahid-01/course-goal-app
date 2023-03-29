import { useState } from 'react';

import {
  TextInput,
  Button,
  View,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';

import image from '../assets/images/goal.png';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputChangeHandler = (text) => {
    setEnteredGoal(text);
  };

  const addGoalHandler = () => {
    if (enteredGoal.trim().length === 0) {
      alert('Enter a valid goal');
      return;
    }
    props.saveGoals(enteredGoal);
    setEnteredGoal('');
    props.modalVisibility();
  };

  return (
    <Modal animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={image} style={styles.img} />
        <TextInput
          placeholder="Enter your goal here"
          style={styles.textInput}
          onChangeText={goalInputChangeHandler}
          value={enteredGoal}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button
              title="Cancel"
              onPress={props.modalVisibility}
              color="#f31282"
            />
          </View>
          <View style={styles.btn}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#311b6b',
  },
  img: {
    height: 120,
    width: 120,
    margin: 30,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '70%',
    marginBottom: 15,
    padding: 5,
    borderRadius: 8,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btn: {
    width: 100,
    marginHorizontal: 15,
  },
});

export default GoalInput;
