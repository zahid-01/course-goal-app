import { View, FlatList, Text, StyleSheet } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={props.goalsArray}
        renderItem={(itemData) => {
          return (
            <View style={styles.goal}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default GoalItem;
