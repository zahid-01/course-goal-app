import { TextInput, Button, View, StyleSheet } from 'react-native';

const GoalInput = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter your goal here"
        style={styles.textInput}
        onChangeText={props.goalInput}
      />
      <Button title="Add Goal" onPress={props.saveGoals} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
