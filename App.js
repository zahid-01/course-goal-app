import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal here"
          style={styles.textInput}
        />
        <Button title="Add Goal" style={styles.btn} />
      </View>
      <View style={styles.list}>
        <Text>Your goals...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignContent: 'center',
    padding: 50,
    height: '100%',
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 10,
    padding: 5,
  },
  btn: {
    marginLeft: 5,
    width: '10%',
    color: 'black',
  },
});

export default App;
